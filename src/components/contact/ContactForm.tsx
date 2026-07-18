"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

/** Optional contact form — intentionally collects no phone/email per the institute's contact policy. */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border-soft bg-surface p-10 text-center"
      >
        <CheckCircle2 className="text-emerald-brand" size={36} />
        <p className="text-base font-semibold">Message sent</p>
        <p className="text-sm text-foreground/60">Thanks for reaching out — the institute will get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border-soft bg-surface p-6 sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-foreground/60">Full name</label>
        <input
          id="name" required type="text" placeholder="Your name"
          className="focus-ring w-full rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-foreground/60">Subject</label>
        <input
          id="subject" required type="text" placeholder="What is this about?"
          className="focus-ring w-full rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-foreground/60">Message</label>
        <textarea
          id="message" required rows={5} placeholder="Tell us more…"
          className="focus-ring w-full resize-none rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>
      <button
        type="submit"
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-brand to-emerald-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-brand/20 transition-transform hover:scale-[1.01] sm:w-auto"
      >
        Send message <Send size={15} />
      </button>
    </form>
  );
}
