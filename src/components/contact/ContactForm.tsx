"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "eba0880c-b4ef-4346-8ade-365746fcac36"
    );
    formData.append("subject", `IGTU Explorer — ${formData.get("subject")}`);
    formData.append("from_name", String(formData.get("name")));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-border-soft bg-surface p-10 text-center"
      >
        <CheckCircle2 className="text-emerald-brand" size={36} />
  
        <p className="text-base font-semibold">
          Message sent successfully
        </p>
  
        <p className="text-sm text-foreground/60">
          Thank you for contacting IGTU Explorer. We will get back to you soon.
        </p>
  
        {/* Instagram */}
        <a
          href="https://www.instagram.com/ns_designer20/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          📸 Contact us on Instagram
        </a>
  
        {/* Send another message */}
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-medium text-emerald-brand hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-border-soft bg-surface p-6 sm:p-8"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-xs font-medium text-foreground/60"
        >
          Full name
        </label>

        <input
          id="name"
          name="name"
          required
          type="text"
          placeholder="Your name"
          className="focus-ring w-full rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium text-foreground/60"
        >
          Email address
        </label>

        <input
          id="email"
          name="email"
          required
          type="email"
          placeholder="your@email.com"
          className="focus-ring w-full rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-xs font-medium text-foreground/60"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          required
          type="text"
          placeholder="What is this about?"
          className="focus-ring w-full rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-foreground/60"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us more…"
          className="focus-ring w-full resize-none rounded-xl border border-border-soft bg-background px-4 py-2.5 text-sm outline-none placeholder:text-foreground/35"
        />
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-brand to-emerald-brand px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-brand/20 transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {loading ? (
          <>
            Sending...
            <Loader2 size={15} className="animate-spin" />
          </>
        ) : (
          <>
            Send message
            <Send size={15} />
          </>
        )}
      </button>
    </form>
  );
}