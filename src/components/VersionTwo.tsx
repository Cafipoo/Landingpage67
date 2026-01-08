import { motion } from 'motion/react';
import { Sparkles, Users, Globe, Smartphone, Brain, Trophy } from 'lucide-react';

export function VersionTwo() {
  const futureFeatures = [
    {
      icon: Users,
      title: "Online Multiplayer",
      description: "Compete globally with real-time leaderboards and tournaments",
      status: "Coming Soon"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Play anywhere with mobile companion app and AR features",
      status: "In Development"
    },
    {
      icon: Brain,
      title: "Adaptive AI Coach",
      description: "Personal fitness coach that learns and adapts to your progress",
      status: "Planned"
    },
    {
      icon: Globe,
      title: "VR Support",
      description: "Immersive virtual reality experience with full body tracking",
      status: "Research Phase"
    },
    {
      icon: Trophy,
      title: "NFT Rewards",
      description: "Earn unique digital collectibles for achievements",
      status: "Exploring"
    },
    {
      icon: Sparkles,
      title: "Custom Levels",
      description: "Create and share your own adventure levels with the community",
      status: "Beta Testing"
    }
  ];

  return (
    <section id="future" className="py-32 bg-gradient-to-br from-[#8B7BA8] via-[#C5A8D4] to-[#E97BA0] relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      
      {/* Animated particles */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.3, y: -30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              🚀 The Future is Bright
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl text-white mb-6" 
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Version 2.0 Preview
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl mx-auto" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We're constantly innovating to bring you the ultimate exergaming experience
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {futureFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring"
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {feature.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {feature.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}