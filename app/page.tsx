"use client";

import { ResumeModal } from "@/components/resume-modal";
import { Github, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex items-center space-x-6">
          <Image
            src="https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?w=800&auto=format&fit=crop&q=60"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full object-cover"
            priority
          />
          <div>
            <h1 className="text-4xl font-bold">John Doe</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Software Engineer & Open Source Enthusiast
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-muted-foreground">
          I build accessible, inclusive products and digital experiences for the web.
          Currently working on developer tools and open source projects.
        </p>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
          >
            <Twitter className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>

        <div className="pt-4">
          <Button
            variant="outline"
            onClick={() => setShowResume(true)}
            className="hover:bg-gray-100"
          >
            View Resume
          </Button>
        </div>
      </div>
      <ResumeModal open={showResume} onOpenChange={setShowResume} />
    </main>
  );
}