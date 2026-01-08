import { Code2, Cpu, Video, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { InteractiveTechCard } from './InteractiveTechCard';
import { Github, Rocket, Globe, Lightbulb, User, Camera, Zap, MonitorPlay, Cable } from 'lucide-react';
import { useRef } from 'react';

export function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create different parallax speeds for each number
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -90]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-120, 110]);
  const y5 = useTransform(scrollYProgress, [0, 1], [100, -130]);
  const y6 = useTransform(scrollYProgress, [0, 1], [-70, 90]);
  const y7 = useTransform(scrollYProgress, [0, 1], [130, -70]);
  const y8 = useTransform(scrollYProgress, [0, 1], [-110, 100]);
  const y9 = useTransform(scrollYProgress, [0, 1], [60, -110]);
  const y10 = useTransform(scrollYProgress, [0, 1], [-130, 70]);
  const y11 = useTransform(scrollYProgress, [0, 1], [90, -80]);

  const techCards = [
    {
      icon: Code2,
      title: "p5play",
      description: "Built on p5.js, p5play makes it easy to create games with sprites, collisions, and animations.",
      link: "https://p5play.org",
      gradient: "from-[#8B7BA8] to-[#C5A8D4]"
    },
    {
      icon: Cpu,
      title: "MakeyMakey",
      description: "Turn anything conductive into a keyboard key: play dough, graphite, bananas, even the human body!",
      link: "https://makeymakey.com",
      gradient: "from-[#E97BA0] to-[#F4D4C4]"
    },
    {
      icon: Video,
      title: "ML5.js",
      description: "Detect body position, hand gestures, or facial features using the webcam with machine learning.",
      link: "https://ml5js.org",
      gradient: "from-[#7AB88E] to-[#A8CDB4]"
    }
  ];

  return (
    <section id="tech" className="py-32 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent"></div>
      
      {/* Floating 6s and 7s */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[12%] left-[8%] text-8xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif', y: y1 }}>6</motion.div>
        <motion.div className="absolute top-[18%] right-[10%] text-7xl font-bold opacity-8 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif', y: y2 }}>7</motion.div>
        <motion.div className="absolute top-[35%] left-[5%] text-9xl font-bold opacity-10 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif', y: y3 }}>6</motion.div>
        <motion.div className="absolute top-[40%] right-[18%] text-8xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif', y: y4 }}>7</motion.div>
        <motion.div className="absolute top-[55%] left-[15%] text-7xl font-bold opacity-8 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif', y: y5 }}>6</motion.div>
        <motion.div className="absolute top-[60%] right-[8%] text-8xl font-bold opacity-10 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif', y: y6 }}>7</motion.div>
        <motion.div className="absolute bottom-[18%] left-[22%] text-9xl font-bold opacity-10 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif', y: y7 }}>6</motion.div>
        <motion.div className="absolute bottom-[12%] right-[15%] text-7xl font-bold opacity-8 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif', y: y8 }}>7</motion.div>
        <motion.div className="absolute top-[48%] left-[28%] text-6xl font-bold opacity-10 text-[#7AB88E]" style={{ fontFamily: 'Syne, sans-serif', y: y9 }}>6</motion.div>
        <motion.div className="absolute top-[25%] right-[25%] text-8xl font-bold opacity-10 text-[#E97BA0]" style={{ fontFamily: 'Syne, sans-serif', y: y10 }}>7</motion.div>
        <motion.div className="absolute bottom-[35%] left-[12%] text-7xl font-bold opacity-8 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif', y: y11 }}>6</motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-[#7AB88E] to-[#8B7BA8] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              🛠️ Your Toolkit
            </motion.div>
            <h2 className="text-5xl md:text-6xl text-[#8B7BA8] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Click on each card to discover more about the technologies you'll be using
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {techCards.map((card, index) => (
              <InteractiveTechCard key={index} {...card} index={index} />
            ))}
          </div>

          {/* Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl text-[#8B7BA8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                🚀 Getting Started
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Three ways to begin your adventure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Option 1 */}
              <motion.a
                href="https://github.com/BenoitCrespin/BenoitCrespin.github.io/tree/main/ExerKill"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-[#E97BA0] to-[#F4D4C4] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Github className="w-8 h-8 text-[#E97BA0]" />
                </div>
                <h4 className="text-2xl text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Clone the Demo
                </h4>
                <p className="text-white/90 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Start from the ExerKill example and customize it to your needs
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>

              {/* Option 2 */}
              <motion.a
                href="https://github.com/quinton-ashley/p5play/wiki/Get-Started"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-[#8B7BA8] to-[#C5A8D4] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Rocket className="w-8 h-8 text-[#8B7BA8]" />
                </div>
                <h4 className="text-2xl text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  VS Code Extension
                </h4>
                <p className="text-white/90 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Install p5play extension and create a new project instantly
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Setup Guide</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>

              {/* Option 3 */}
              <motion.a
                href="https://openprocessing.org"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-br from-[#7AB88E] to-[#A8CDB4] rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Globe className="w-8 h-8 text-[#7AB88E]" />
                </div>
                <h4 className="text-2xl text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Code Online
                </h4>
                <p className="text-white/90 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Quick prototyping on OpenProcessing with no setup required
                </p>
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Start Coding</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            </div>

            {/* Pro Tip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-[#FDFBE8] to-[#F4D4C4] rounded-2xl p-6 border-2 border-[#E97BA0]/30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Lightbulb className="w-6 h-6 text-[#E97BA0]" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#8B7BA8] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    💡 Pro Tip
                  </h5>
                  <p className="text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Browse the p5play gallery for inspiration! You can remix existing games and add your own twist with motion controls and MakeyMakey integration.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Setup Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl text-[#8B7BA8] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                🎮 Final Demo Setup
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                The complete hardware & software flow
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#F4D4C4]/30 rounded-3xl p-10 shadow-2xl border-2 border-[#E97BA0]/20">
              <div className="grid md:grid-cols-5 gap-6 relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#E97BA0] via-[#8B7BA8] to-[#7AB88E] opacity-20"></div>
                
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E97BA0] hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-[#E97BA0] to-[#F4D4C4] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E97BA0] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>1</div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Player Ready
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Position in front of webcam
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#8B7BA8] hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-[#8B7BA8] to-[#C5A8D4] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#8B7BA8] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>2</div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        ML5.js Vision
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        AI detects body position
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#7AB88E] hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-[#7AB88E] to-[#A8CDB4] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#7AB88E] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>3</div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        MakeyMakey
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Body becomes controller
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E97BA0] hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-[#E97BA0] to-[#F4D4C4] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <Cable className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#E97BA0] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>4</div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Connection
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Player linked to device
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 5 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="relative z-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#8B7BA8] hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-[#8B7BA8] to-[#C5A8D4] w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <MonitorPlay className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#8B7BA8] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>5</div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Game Display
                      </h4>
                      <p className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        HDMI to projector
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Info Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-10 bg-white rounded-2xl p-6 shadow-lg border-2 border-[#7AB88E]/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-gradient-to-br from-[#7AB88E] to-[#A8CDB4] rounded-full p-2">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-semibold text-[#8B7BA8] text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Complete Integration
                  </h5>
                </div>
                <p className="text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  All components work together seamlessly: ML5.js captures your movements, MakeyMakey translates body contact into controls, and p5play powers the immersive gameplay projected for everyone to see.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}