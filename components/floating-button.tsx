'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function FloatingButton() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-accent text-primary rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40 group"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute w-16 h-16 bg-accent/20 rounded-full"
      ></motion.div>
      <MessageCircle className="w-6 h-6 relative z-10" />
    </motion.a>
  );
}
