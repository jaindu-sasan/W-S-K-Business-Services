'use client';

import { motion } from 'framer-motion';

export function FloatingButton() {
  return (
    <motion.a
      href="https://wa.me/94707590990"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full border border-white/80 shadow-[0_0_28px_rgba(37,211,102,0.68)] ring-2 ring-[#9CFFBF]/70 hover:shadow-[0_0_34px_rgba(37,211,102,0.85)] transition-shadow flex items-center justify-center z-[70] group"
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        className="absolute w-16 h-16 bg-[#25D366]/38 rounded-full"
      ></motion.div>
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 relative z-10 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.32c-.27-.14-1.58-.78-1.82-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.85 1.03-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.15-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.17-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.15-.01-.33-.01-.51-.01-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.25 0 1.32.97 2.6 1.1 2.78.14.18 1.9 2.9 4.6 4.06.64.28 1.15.45 1.54.58.65.21 1.24.18 1.7.11.52-.08 1.58-.65 1.8-1.27.22-.63.22-1.17.15-1.28-.06-.11-.24-.17-.51-.31Z" />
        <path d="M16 3C8.82 3 3 8.65 3 15.62c0 2.46.73 4.84 2.11 6.88L3 29l6.73-2.05a13.3 13.3 0 0 0 6.27 1.57H16c7.18 0 13-5.65 13-12.62S23.18 3 16 3Zm0 23.2h-.01a11.05 11.05 0 0 1-5.63-1.53l-.4-.24-4 1.22 1.26-3.86-.26-.39a10.72 10.72 0 0 1-1.67-5.78C5.29 9.79 10.07 5.2 16 5.2c5.93 0 10.71 4.6 10.71 10.42 0 5.82-4.78 10.58-10.71 10.58Z" />
      </svg>
    </motion.a>
  );
}
