"use client";

import { ResumeModal } from "@/components/resume-modal";
import { Github, Mail, Twitter, MonitorCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Avatar from "@/public/avatar.webp";
export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="flex text-bl4ck min-h-screen flex-col items-center justify-center p-8 bg-background">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex items-center space-x-6">
          <Image
            src={Avatar.src}
            alt="Profile"
            width={120}
            height={120}
            className="object-cover rounded-full drop-shadow-xl brightness border border-black"
            priority
          />
          <div>
            <h1 className="text-4xl font-bold">Thomas Hand</h1>
            <p className="text-lg text-bl4ck mt-2">
              Web Development/Design and Search Engine Optimisation
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-bl4ck">
        I'm Tom, a tech enthusiast with a love for finding data-driven solutions at the intersection of web development and search engine optimisation. I fuel my passion with <a href="https://soundcloud.com/realblackcoffee" target="blank" className="underline decoration-wavy underline-offset-2 text-decoration-2 hover:decoration-black/50 " >black coffee</a> and love exploring web-based technologies. Would be lost without Flexbox, Chrome dev tools, Stack Overflow & ChatGPT.
        </p>

        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
          >
            <MonitorCheck className="h-6 w-6" />
          </Link>
          <Link
            href="https://twitter.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
          >
            <Github className="h-6 w-6" />
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