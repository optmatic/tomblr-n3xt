"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const resume = {
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp",
        period: "2020 - Present",
        description: "Led development of core platform features and mentored junior developers.",
      },
      {
        title: "Software Engineer",
        company: "StartupX",
        period: "2018 - 2020",
        description: "Full-stack development using React, Node.js, and AWS.",
      },
    ],
    education: [
      {
        degree: "M.S. Computer Science",
        school: "Tech University",
        year: "2018",
      },
      {
        degree: "B.S. Computer Science",
        school: "State University",
        year: "2016",
      },
    ],
    skills: [
      "JavaScript/TypeScript",
      "React/Next.js",
      "Node.js",
      "AWS",
      "Python",
      "SQL",
    ],
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search resume..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Experience">
          {resume.experience.map((exp) => (
            <CommandItem key={exp.title} className="py-4">
              <div>
                <h3 className="font-medium">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Education">
          {resume.education.map((edu) => (
            <CommandItem key={edu.degree} className="py-4">
              <div>
                <h3 className="font-medium">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school} • {edu.year}</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Skills">
          <CommandItem className="py-4">
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}