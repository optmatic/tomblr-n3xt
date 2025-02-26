"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export function ResumeModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [result, setResult] = useState("");
  const [showPDF, setShowPDF] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Processing...");
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("title", "Resume Access Request");
    formData.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! You can now view the resume below.");
        setShowPDF(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error submitting form. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-bl4ck">
        <DialogHeader>
          <DialogTitle>
            <span className="font-serif font-normal text-2xl text-white">
              Request Resume Access
            </span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 rounded border bg-transparent text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 rounded border bg-transparent text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-2 rounded border bg-transparent text-white"
            required
          />

          <button
            type="submit"
            className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Submit Request
            </span>
          </button>

          {result && (
            <p className="text-center text-sm mt-2 text-white">{result}</p>
          )}
        </form>

        {showPDF && (
          <div className="mt-4">
            <iframe
              src="/Thom_2025.pdf"
              className="w-full h-[600px]"
              title="Resume PDF"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
