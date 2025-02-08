import { CalendarIcon, DumbbellIcon, BinaryIcon as RunningIcon } from "lucide-react"

export interface Exercise {
  date: string
  type: "Running" | "Weight Training"
  distance?: number
  description?: string
}

export function ExerciseEntry({ exercise }: { exercise: Exercise }) {
  const { date, type, distance, description } = exercise

  return (
    <div className="flex items-start space-x-4 mb-4 p-3 bg-bl4ck rounded-md border border-white/10">
      <div className="flex-shrink-0">
        {type === "Running" ? (
          <RunningIcon className="h-6 w-6 text-blue-500" />
        ) : (
          <DumbbellIcon className="h-6 w-6 text-green-500" />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-medium text-white">{type}</h3>
          <div className="flex items-center text-xs text-white">
            <CalendarIcon className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        {type === "Running" && <p className="text-xs text-white/90 font-light">{distance} km</p>}
        {type === "Weight Training" && description && <p className="text-xs text-white/90 font-light">{description}</p>}
      </div>
    </div>
  )
}

