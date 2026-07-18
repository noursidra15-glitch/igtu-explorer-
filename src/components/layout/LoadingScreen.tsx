"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-brand to-blue-brand text-white"
          >
            <MapPin size={26} />
          </motion.div>
          <p className="font-display text-sm font-medium tracking-wide text-foreground/60">
            IGTU Explorer
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
