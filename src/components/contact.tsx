"use client";

import { CheckIcon, SendIcon, SparkleIcon } from "lucide-react";
import { useState } from "react";
import Turnstile from "react-turnstile";
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

export function Contact() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!token) {
      toast.error("Please complete the verification");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        subject: formData.get("subject"),
        message: formData.get("message"),
        token,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Message sent successfully!");
      setOpen(false);
    } else {
      toast.error(data.error || "Failed to send message");
    }

    setIsSubmitting(false);
  }

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
          <Button size="lg" className="group">
            Send a message
            <SendIcon />
          </Button>
        </DialogTrigger>

        <DialogOverlay className="backdrop-blur-sm bg-black/50">
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

                  <Input
                    placeholder="Project inquiry"
                    name="subject"
                    required
                  />
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

                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onVerify={setToken}
                  theme="light"
                  size="flexible"
                  className="[&>*:first-child]:h-[65px]"
                />

                <DialogFooter>
                  <Button size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                    <CheckIcon />
                  </Button>
                </DialogFooter>
              </div>
            </form>
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
}
