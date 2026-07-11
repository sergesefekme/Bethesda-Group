"use client";

import { motion } from "framer-motion";

/**
 * Route-transition wrapper. Next.js remounts `template.tsx` on every navigation,
 * so a simple enter animation here gives smooth, consistent page transitions
 * without manual AnimatePresence key wiring.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
