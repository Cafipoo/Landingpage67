import { Trophy, Code, Palette, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { CountdownTimer } from './CountdownTimer';

export function EventSection() {
  return (
    <section id="event" className="py-32 bg-gradient-to-br from-[#F4D4C4] to-[#C5A8D4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E97BA0]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-white text-[#8B7BA8] px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              🚀 The Main Event
            </motion.div>
            <h2 className="text-5xl md:text-6xl text-[#8B7BA8] mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              The Nuit MMI 2026 Challenge
            </h2>
          </div>

          <CountdownTimer />

          {/* Team Roles */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[#8B7BA8] rounded-full flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-[#8B7BA8]">DW Track</h3>
              <p className="text-gray-700">
                Focus on the code, game mechanics, and technical implementation using p5play, 
                MakeyMakey, and ML5.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <div className="w-14 h-14 bg-[#E97BA0] rounded-full flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-3 text-[#E97BA0]">CN Track</h3>
              <p className="text-gray-700">
                Focus on graphics, landing page design, game intro/UI, and visual storytelling.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-[#E97BA0]" />
              <h3 className="text-2xl text-[#8B7BA8]">Event Timeline</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-32 flex-shrink-0 text-[#8B7BA8]">Jan 8</div>
                <div className="flex-1 text-gray-700">Event starts - Brainstorming & Development</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-32 flex-shrink-0 text-[#8B7BA8]">Jan 9, 9:00</div>
                <div className="flex-1 text-gray-700">Submission deadline</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-32 flex-shrink-0 text-[#8B7BA8]">9:00-10:00</div>
                <div className="flex-1 text-gray-700">Demo session</div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-32 flex-shrink-0 text-[#E97BA0]">10:00+</div>
                <div className="flex-1">
                  <strong>Results announcement - Top 3 teams will be rewarded! 🏆</strong>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}