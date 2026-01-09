import { X, ExternalLink, Github, Gamepad2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameModal({ isOpen, onClose }: GameModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header with gradient */}
              <div className="bg-gradient-to-br from-[#8B7BA8] via-[#C5A8D4] to-[#E97BA0] p-8 pb-12 rounded-t-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Ready to Play?
                  </h2>
                  <p className="text-white/90 text-lg">
                    Launch 67 Adventure and begin your fitness journey
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 -mt-6">
                <div className="bg-[#FDFBE8] rounded-2xl p-6 mb-6 border-2 border-[#8B7BA8]">
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    🎮 Play 67 Adventure
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Enter your game URL below or click to launch the demo version
                  </p>
                  <input
                    type="text"
                    placeholder="https://your-game-url.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8B7BA8] focus:outline-none transition-colors mb-3"
                  />
                  <a
                    href="https://fp-lajudie.fr/67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-[#8B7BA8] to-[#E97BA0] hover:from-[#7A6A97] hover:to-[#d86a8f] text-white py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 text-center font-semibold shadow-lg"
                  >
                    <span className="inline-flex items-center gap-2">
                      Launch Game <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>
                </div>

                <div className="bg-[#F4D4C4] rounded-2xl p-6 mb-6">
                  <h3 className="text-xl mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    📦 Source Code
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Check out the code behind 67 Adventure on GitHub
                  </p>
                  <input
                    type="text"
                    placeholder="https://github.com/your-repo"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#8B7BA8] focus:outline-none transition-colors mb-3"
                  />
                  <a
                    href="#"
                    className="block w-full bg-[#2D2640] hover:bg-[#1f1a2e] text-white py-4 rounded-xl transition-all transform hover:scale-105 active:scale-95 text-center font-semibold shadow-lg"
                  >
                    <span className="inline-flex items-center gap-2">
                      View Repository <Github className="w-5 h-5" />
                    </span>
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#A8CDB4] to-[#7AB88E] text-white rounded-2xl p-6">
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    💡 Before You Start
                  </h3>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li>• Ensure your webcam is connected and enabled</li>
                    <li>• Clear at least 2m x 2m of space around you</li>
                    <li>• Good lighting improves motion detection accuracy</li>
                    <li>• Wear comfortable clothing for movement</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}