import { Heart, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function ExergamingSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Reduces BMI and improves cardiorespiratory fitness",
      color: "#E97BA0",
      bgColor: "#F4D4C4"
    },
    {
      icon: Users,
      title: "Social Connection",
      description: "Strengthens social bonds through active play",
      color: "#8B7BA8",
      bgColor: "#C5A8D4"
    },
    {
      icon: Zap,
      title: "Therapeutic Tool",
      description: "Used in rehabilitation and therapy programs",
      color: "#7AB88E",
      bgColor: "#A8CDB4"
    }
  ];

  return (
    <section id="exergaming" className="py-32 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-gradient-to-r from-[#E97BA0] to-[#8B7BA8] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              The Science Behind The Fun
            </motion.div>
            <h2 className="text-5xl md:text-6xl mb-6 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif' }}>
              What is Exergaming?
            </h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 mb-16 leading-relaxed text-center"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Exergaming is a portmanteau of the words "exercise" and "gaming". It refers to video games 
            that also constitute a form of physical exercise. The American College of Sports Medicine 
            defines it as <em className="text-[#8B7BA8] font-semibold">"a technology-driven physical activity that requires participants to be 
            physically active to play"</em>.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cards.map((card, index) => {
              const Icon = card.icon;
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
                    className="text-center p-8 rounded-3xl cursor-pointer relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <motion.div
                      animate={{
                        rotate: hoveredCard === index ? 360 : 0,
                        scale: hoveredCard === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg"
                      style={{ backgroundColor: card.color }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl mb-3 relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-700 relative z-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {card.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FDFBE8] to-[#F4D4C4] p-10 rounded-3xl border-2 border-[#8B7BA8] relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E97BA0] rounded-full opacity-5 blur-3xl"></div>
            <h3 className="text-3xl mb-6 text-[#8B7BA8]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Popular Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              {[
                { name: "Wii Fit", stat: "21M+ copies sold", emoji: "🎮" },
                { name: "Dance Dance Revolution", stat: "Global phenomenon", emoji: "💃" },
                { name: "Pokémon Go", stat: "Billion downloads", emoji: "🏃" }
              ].map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-md"
                >
                  <div className="text-4xl mb-2">{example.emoji}</div>
                  <div className="font-bold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {example.name}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {example.stat}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}