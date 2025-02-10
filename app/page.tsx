"use client";

import { ResumeModal } from "@/components/resume-modal";
import { Github, Mail, Twitter, MonitorCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Button3d from "@/components/ui/button3d";
import { useState } from "react";
import Avatar from "@/public/avatar.webp";
export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="flex items-center space-x-6">
          <Image
            src={Avatar.src}
            alt="Profile"
            width={120}
            height={120}
            className="object-cover rounded-full hue-rotate-15 hover:hue-rotate-0 shadow-inner shadow-white"
            priority
          />
          <div>
            <h1 className="text-4xl  font-serif">Thomas Hand</h1>
            <p className="text-sm mt-2 opacity-90 font-light">
              <span className="underline underline-offset-4">Web development</span>, <span className="underline underline-offset-4">UX</span> and <span className="underline underline-offset-4">SEO</span>.
            </p>
          </div>
        </div>

        <p className="text-md font-light leading-relaxed ">
        I'm Tom, a tech enthusiast with a love for finding data-driven solutions at the intersection of web development and search engine optimisation. I fuel my passion with <a href="https://soundcloud.com/realblackcoffee" target="blank" className="underline decoration-wavy underline-offset-2 text-decoration-2 hover:decoration-white/80" >black coffee</a> and love exploring web-based technologies. Would be lost without Flexbox, Chrome dev tools, Stack Overflow & ChatGPT.
        </p>


{/* Links go here once ready */}
        {/* <div className="flex items-center space-x-4">
          <Link
            href="https://thomhand.notion.site/51c1cbfd3e1548018afc768f5b1e65f9?v=9b60f0d32407458abee59fce66e5e458&pvs=4"
            className="text-white hover:text-white/80 transition-colors"
            target="_blank"
          >
            <MonitorCheck className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/tomyebest"
            className="text-white hover:text-white/80 transition-colors"
            target="_blank"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:tom@optmatic.com"
            className="text-white hover:text-white/80 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div> */}

 
        {/* <div className="pt-4"> */}
        <div>
          <Button3d text="View Resume"
            onClick={() => setShowResume(true)}
          />
        </div>
      </div>
      <ResumeModal open={showResume} onOpenChange={setShowResume} />
    </main>
  );
}