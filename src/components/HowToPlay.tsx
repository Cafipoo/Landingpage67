import { motion } from 'motion/react';
import { Camera, Zap, Target, Trophy } from 'lucide-react';

export function HowToPlay() {
  const steps = [
    {
      icon: Camera,
      title: "Position Yourself",
      description: "Stand in front of your webcam and ensure good lighting",
      color: "#E97BA0"
    },
    {
      icon: Zap,
      title: "Connect & Calibrate",
      description: "The AI will detect your movements and calibrate to your body",
      color: "#8B7BA8"
    },
    {
      icon: Target,
      title: "Move & Play",
      description: "Use your body to control the character through 67 exciting levels",
      color: "#7AB88E"
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor calories burned, achievements unlocked, and level up!",
      color: "#E97BA0"
    }
  ];

  return (
    <section id="how-to-play" className="py-32 bg-gradient-to-br from-[#FDFBE8] to-[#F4D4C4] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#8B7BA8] rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#E97BA0] rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
              className="inline-block bg-white text-[#8B7BA8] px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              🎯 Simple to Start
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl text-[#8B7BA8] mb-4" 
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              How to Play
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Get started in 4 easy steps and begin your fitness adventure
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span 
                          className="text-4xl font-bold opacity-20"
                          style={{ fontFamily: 'Syne, sans-serif', color: step.color }}
                        >
                          {index + 1}
                        </span>
                        <h3 className="text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}