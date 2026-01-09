"use client";

import { ArrowRightIcon, ArrowUpRightIcon, SparkleIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

declare global {
  interface Window {
    turnstile?: any;
  }
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<number | null>(null);

  // Render Turnstile when dialog opens
  useEffect(() => {
    if (!open) return;

    const render = () => {
      if (window.turnstile && turnstileRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          theme: "auto",
          callback: (t: string) => setToken(t),
        });
      } else {
        setTimeout(render, 150);
      }
    };

    render();

    return () => {
      setToken(null);
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!token) {
      toast.error("Please complete the verification");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, subject, message, token }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setOpen(false);
        e.currentTarget.reset();

        if (window.turnstile) {
          if (widgetIdRef.current != null) {
            window.turnstile.reset(widgetIdRef.current);
          } else {
            window.turnstile.reset();
          }
        }
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 border bg-accent rounded-xl p-8 md:w-[40%]">
      <div className="flex gap-2 items-center">
        <SparkleIcon className="size-4 text-muted-foreground fill-muted-foreground" />
        <span className="text-sm text-muted-foreground">Got an idea?</span>
      </div>

      <span className="text-2xl font-semibold tracking-tight">
        Let's build something cool together.
      </span>

      <div />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg">
            Get in touch
            <ArrowUpRightIcon />
          </Button>
        </DialogTrigger>

        <DialogOverlay className="backdrop-blur-xs bg-black/25">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Get in touch</DialogTitle>
              <DialogDescription>
                Use this form for project ideas, questions, or collabs.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label>Name</Label>
                  <Input placeholder="John Doe" name="name" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Subject</Label>
                  <Input placeholder="Project inquiry" name="subject" required />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Message</Label>
                  <Textarea
                    placeholder="I have a cool project idea..."
                    name="message"
                    required
                  />
                  <p className="text-muted-foreground text-xs">
                    Include a way for me to contact you if you want a reply.
                  </p>
                </div>

                {/* Turnstile mounts here */}
                <div ref={turnstileRef} />
              </div>

              <DialogFooter>
                <Button size="lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                  <ArrowRightIcon />
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
}
