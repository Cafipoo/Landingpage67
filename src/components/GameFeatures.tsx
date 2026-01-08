import { Heart, Zap, Camera, Gamepad2, Users, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

export function GameFeatures() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax speeds for each number
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const y6 = useTransform(scrollYProgress, [0, 1], [-60, 80]);
  const y7 = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const y8 = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const y9 = useTransform(scrollYProgress, [0, 1], [50, -100]);
  const y10 = useTransform(scrollYProgress, [0, 1], [-120, 80]);

  const features = [
    {
      icon: Camera,
      title: "Motion Tracking",
      description: "Advanced ML5.js AI recognizes your movements in real-time through your webcam",
      color: "#E97BA0",
      bgColor: "#F4D4C4"
    },
    {
      icon: Gamepad2,
      title: "MakeyMakey Integration",
      description: "Turn your body into the ultimate game controller with conductive technology",
      color: "#8B7BA8",
      bgColor: "#C5A8D4"
    },
    {
      icon: Heart,
      title: "Health Focused",
      description: "Burn calories while having fun - every movement counts towards your fitness goals",
      color: "#E97BA0",
      bgColor: "#F4D4C4"
    },
    {
      icon: Zap,
      title: "Dynamic Gameplay",
      description: "67 unique levels that adapt to your fitness level and keep you challenged",
      color: "#7AB88E",
      bgColor: "#A8CDB4"
    },
    {
      icon: Users,
      title: "Multiplayer Mode",
      description: "Compete with friends or team up for cooperative health challenges",
      color: "#8B7BA8",
      bgColor: "#C5A8D4"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your fitness journey with detailed stats and achievements",
      color: "#7AB88E",
      bgColor: "#A8CDB4"
    }
  ];

  return (
    <section id="features" className="py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      {/* Floating 6s and 7s */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[10%] left-[5%] text-8xl font-bold opacity-10 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif' }} y={y1}>6</motion.div>
        <motion.div className="absolute top-[15%] right-[5%] text-9xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif' }} y={y2}>7</motion.div>
        <motion.div className="absolute top-[30%] left-[12%] text-7xl font-bold opacity-8 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif' }} y={y3}>6</motion.div>
        <motion.div className="absolute top-[35%] right-[15%] text-8xl font-bold opacity-10 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif' }} y={y4}>7</motion.div>
        <motion.div className="absolute top-[50%] left-[8%] text-9xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif' }} y={y5}>6</motion.div>
        <motion.div className="absolute top-[55%] right-[8%] text-7xl font-bold opacity-8 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif' }} y={y6}>7</motion.div>
        <motion.div className="absolute top-[70%] left-[20%] text-8xl font-bold opacity-10 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif' }} y={y7}>6</motion.div>
        <motion.div className="absolute bottom-[15%] right-[12%] text-7xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif' }} y={y8}>7</motion.div>
        <motion.div className="absolute bottom-[20%] left-[25%] text-6xl font-bold opacity-8 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif' }} y={y9}>6</motion.div>
        <motion.div className="absolute top-[45%] right-[25%] text-8xl font-bold opacity-10 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif' }} y={y10}>7</motion.div>
      </div>
      
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
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
              className="inline-block bg-gradient-to-r from-[#E97BA0] to-[#8B7BA8] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              🎮 Game Features
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl mb-6 text-[#8B7BA8]" 
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Why 67 Adventure?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Experience gaming like never before with cutting-edge technology that makes fitness addictive
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      y: hoveredCard === index ? -10 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-8 rounded-3xl cursor-pointer relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-full"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg"
                      style={{ backgroundColor: feature.color }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl mb-3 relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 relative z-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {feature.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}