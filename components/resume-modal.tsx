"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </DialogContent>
    </Dialog>
  );
}