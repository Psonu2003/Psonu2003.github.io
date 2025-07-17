import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react'; // This icon is used for the close button

export default function LaserConceptModal({ isOpen, onClose, darkMode }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4" // z-index ensures it's on top
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop (semi-transparent overlay) */}
          <div
            className={`absolute inset-0 ${
              darkMode ? 'bg-black/70' : 'bg-white/70'
            } backdrop-blur-sm`}
            onClick={onClose} 
          />

          {/* Modal Content */}
          <motion.div
            className={`relative w-full max-w-lg p-6 rounded-lg shadow-2xl border ${
              darkMode
                ? 'bg-gray-900 border-purple-800 text-white'
                : 'bg-gray-50 border-purple-300 text-gray-800'
            } transition-colors duration-500`}
            initial={{ scale: 0.9, y: 50 }} 
            animate={{ scale: 1, y: 0 }} 
            exit={{ scale: 0.9, y: 50 }} 
            transition={{ type: "spring", stiffness: 200, damping: 25 }} 
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
            >
              <X className="size-5" />
            </Button>

            <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              The Laser
            </h2>
            <p className="mb-4 text-sm md:text-base">
              The visual laser beam in this portfolio represents a bit of quantum information being transmitted. It is alluding to my Laser Quantum Key Distribution BB84 Protocol project which uses this exact concept to classically demonstrate how the protocol works.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Each project showcase features a "Beam Splitter" (the purple square) and a "Receiver" (the glowing purple dot). When the main laser beam hits the Beam Splitter of a project, it's akin to a quantum measurement or interaction.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}