import { AlertCircle, Award, Clock, Users2, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export function RulesSection() {
  return (
    <section id="rules" className="py-20 bg-gradient-to-br from-[#C5A8D4] to-[#8B7BA8]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-12 text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Contest Rules
          </motion.h2>

          {/* Judging Criteria */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-[#E97BA0]" />
              <h3 className="text-3xl text-[#8B7BA8]">Judging Criteria</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E97BA0] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Exergaming Relevance</h4>
                  <p className="text-gray-600 text-sm">How well does it promote physical activity and health?</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Originality</h4>
                  <p className="text-gray-600 text-sm">Creative concept and unique approach</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7AB88E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Graphic Quality</h4>
                  <p className="text-gray-600 text-sm">Visual design and presentation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#E97BA0] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Code Quality</h4>
                  <p className="text-gray-600 text-sm">Clean, functional, and well-structured code</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#8B7BA8] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Creativity</h4>
                  <p className="text-gray-600 text-sm">Innovative use of technologies and ideas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7AB88E] rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg mb-1">Presentation Clarity</h4>
                  <p className="text-gray-600 text-sm">Clear communication and demo quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Rules */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-[#8B7BA8]" />
                <h4 className="text-xl">Language</h4>
              </div>
              <p className="text-gray-700">
                All deliverables <strong>must be in English</strong> - code, landing page, presentation, everything!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users2 className="w-6 h-6 text-[#8B7BA8]" />
                <h4 className="text-xl">Teams</h4>
              </div>
              <p className="text-gray-700">
                Teams have been formed in advance. <strong>No changes allowed.</strong> Work together and support each other!
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#8B7BA8]" />
                <h4 className="text-xl">External Help</h4>
              </div>
              <p className="text-gray-700">
                <strong>No outside assistance allowed.</strong> Professors will be available on-site to help.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#8B7BA8]" />
                <h4 className="text-xl">Building Access</h4>
              </div>
              <p className="text-gray-700">
                MMI building open 24h. <strong>No outside exit between 10 PM - 7:30 AM</strong> (except balcony).
              </p>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl mb-6 text-[#8B7BA8]">Facilities & Spaces</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>Ground floor labs:</strong> Work spaces (no food/drinks, keep quiet)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>Room R03:</strong> Reserved for professors
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>Room 103 (upstairs):</strong> Food and refreshments area
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>Room 101 (upstairs):</strong> Rest area for naps
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>MMI restrooms:</strong> Reserved for women
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E97BA0] text-xl">→</span>
                <div>
                  <strong>GMP restrooms:</strong> For men
                </div>
              </div>
            </div>
          </div>

          {/* Content Guidelines */}
          <div className="mt-8 bg-[#FDFBE8] border-2 border-white rounded-2xl p-6">
            <h4 className="text-xl mb-4 text-[#8B7BA8]">Content Guidelines</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-[#E97BA0]">•</span>
                You may build upon existing games or use online resources
              </li>
              <li className="flex gap-2">
                <span className="text-[#E97BA0]">•</span>
                Aim for maximum originality in your final product
              </li>
              <li className="flex gap-2">
                <span className="text-[#E97BA0]">•</span>
                Avoid controversial content, violence, or offensive language
              </li>
              <li className="flex gap-2">
                <span className="text-[#E97BA0]">•</span>
                Respect basic rules of conduct and don't disturb other teams
              </li>
              <li className="flex gap-2">
                <span className="text-[#E97BA0]">•</span>
                No alcohol in the building
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}