import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingActionBar = () => {
  const buttons = [
    {
      icon: <Mail size={24} />,
      href: 'mailto:info@royalthaiboxgym.de',
      label: 'E-Mail senden',
    },
    {
      icon: <Phone size={24} />,
      href: 'tel:015901122335',
      label: 'Anrufen',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed right-0 top-1/3 z-50 flex flex-col gap-3"
    >
      {buttons.map((button, index) => (
        <motion.a
          key={button.href}
          href={button.href}
          aria-label={button.label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="w-12 h-12 bg-red-600 flex items-center justify-center text-white shadow-lg hover:bg-red-700 transition-all duration-300 cursor-pointer rounded-l-full"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          {button.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingActionBar;