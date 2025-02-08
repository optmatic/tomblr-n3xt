"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { ExerciseEntry, type Exercise } from "./exercise-entry"
import { useEffect, useState } from "react"

const STRAVA_CLIENT_ID = "147622"
const STRAVA_CLIENT_SECRET = "12387152ea6288f023f09a2f2b5c10ccf64d9ba4"
const REDIRECT_URI = "http://localhost:3000"

const authUrl = `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=activity:read_all,read`;

export function ExerciseLog() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if we have a code from Strava OAuth
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    async function getInitialToken(code: string) {
      try {
        const response = await fetch('https://www.strava.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: STRAVA_CLIENT_ID,
            client_secret: STRAVA_CLIENT_SECRET,
            code: code,
            grant_type: 'authorization_code',
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to get token')
        }

        const data = await response.json()
        localStorage.setItem('strava_access_token', data.access_token)
        localStorage.setItem('strava_refresh_token', data.refresh_token)
        localStorage.setItem('strava_expires_at', data.expires_at)
        setIsAuthenticated(true)
        return data.access_token
      } catch (error) {
        console.error('Error getting token:', error)
        throw error
      }
    }

    async function refreshToken() {
      const refreshToken = localStorage.getItem('strava_refresh_token')
      try {
        const response = await fetch('https://www.strava.com/oauth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: STRAVA_CLIENT_ID,
            client_secret: STRAVA_CLIENT_SECRET,
            refresh_token: refreshToken,
            grant_type: 'refresh_token',
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to refresh token')
        }

        const data = await response.json()
        localStorage.setItem('strava_access_token', data.access_token)
        localStorage.setItem('strava_refresh_token', data.refresh_token)
        localStorage.setItem('strava_expires_at', data.expires_at)
        return data.access_token
      } catch (error) {
        console.error('Error refreshing token:', error)
        throw error
      }
    }

    async function fetchStravaActivities() {
      try {
        setError(null)
        let accessToken = localStorage.getItem('strava_access_token')
        const expiresAt = localStorage.getItem('strava_expires_at')

        if (!accessToken || (expiresAt && Date.now() >= parseInt(expiresAt) * 1000)) {
          accessToken = await refreshToken()
        }

        const response = await fetch(
          'https://www.strava.com/api/v3/athlete/activities',
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const activities = await response.json()
        
        const transformedActivities: Exercise[] = activities.map((activity: any) => ({
          date: new Date(activity.start_date).toISOString().split('T')[0],
          type: activity.type,
          distance: activity.distance / 1000,
          description: activity.name
        }))

        setExercises(transformedActivities)
      } catch (error) {
        console.error('Error fetching Strava activities:', error)
        setError('Failed to load exercise data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    if (code) {
      getInitialToken(code).then(() => fetchStravaActivities())
    } else if (localStorage.getItem('strava_access_token')) {
      setIsAuthenticated(true)
      fetchStravaActivities()
    } else {
      setIsLoading(false)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="text-center py-4">
        <a href={authUrl} className="text-white bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
          Connect with Strava
        </a>
      </div>
    )
  }

  return (
    <div className="text-white border border-white/10 w-full max-w-md mx-auto shadow-xl rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-bl4ck border-b border-white/10">
        <h2 className="text-xl font-semibold">Exercise Log</h2>
      </div>
      <ScrollArea className="h-[400px] p-4">
        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : error ? (
          <div className="text-center py-4 text-red-400">{error}</div>
        ) : exercises.length === 0 ? (
          <div className="text-center py-4">No exercises found</div>
        ) : (
          exercises.map((exercise, index) => (
            <ExerciseEntry key={index} exercise={exercise} />
          ))
        )}
      </ScrollArea>
    </div>
  )
}

