import { motion } from 'motion/react';
import { ExternalLink, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface InteractiveTechCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  gradient: string;
  index: number;
}

export function InteractiveTechCard({ icon: Icon, title, description, link, gradient, index }: InteractiveTechCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="perspective-1000 h-[350px]"
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} text-white rounded-3xl p-8 shadow-xl backface-hidden`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="h-full flex flex-col">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              {title}
            </h3>
            <p className="mb-6 text-white/90 flex-grow" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {description}
            </p>
            <div className="text-sm text-white/80 flex items-center gap-2">
              <span>Click to learn more</span>
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                ↻
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 bg-white rounded-3xl p-8 shadow-xl backface-hidden`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col">
            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-4`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-4 text-[#2D2640]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to dive in?
            </h3>
            <p className="text-gray-600 mb-6 flex-grow" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Explore the official documentation and start building amazing exergaming experiences.
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`block w-full bg-gradient-to-r ${gradient} text-white py-4 rounded-xl transition-all transform hover:scale-105 text-center font-semibold shadow-lg`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="inline-flex items-center gap-2">
                Visit Documentation <ExternalLink className="w-5 h-5" />
              </span>
            </a>
            <div className="text-sm text-gray-500 text-center mt-4">
              Click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
