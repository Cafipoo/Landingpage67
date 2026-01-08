import mascot from "../assets/67perso.svg";
import { Gamepad2, Calendar, Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";

interface HeroProps {
  onPlayGame: () => void;
}

export function Hero({ onPlayGame }: HeroProps) {
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const mascotRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const mascotScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const scrollToRules = () => {
    const rulesSection = document.getElementById("how-to-play");
    if (rulesSection) {
      rulesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBE8] via-[#F4D4C4] to-[#C5A8D4]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E97BA0_0%,transparent_50%)] animate-pulse-slow"></div>
        </div>
      </div>

      {/* Wavy bottom */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative container mx-auto px-4 py-32 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mx-[0px] my-[87px] mt-[-41px] mr-[0px] mb-[108px] ml-[0px]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-[#E97BA0] to-[#8B7BA8] bg-clip-text text-transparent mb-2 text-[65px]">
                67 Adventure
              </span>
              <span className="block text-3xl md:text-5xl text-gray-700">
                Move. Play. Transform.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-700 mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              The revolutionary game that turns your body into the controller
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Powered by AI motion tracking and innovative MakeyMakey
              technology, 67 Adventure makes fitness fun, engaging, and
              absolutely addictive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onPlayGame}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#E97BA0] to-[#8B7BA8] hover:from-[#d86a8f] hover:to-[#7A6A97] text-white px-8 py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-2xl font-semibold text-lg overflow-hidden"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <Gamepad2 className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Play the Game</span>
                <motion.div
                  animate={{ x: isHovering ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </motion.div>
              </button>

              <a
                href="#rules"
                onClick={scrollToRules}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#8B7BA8] px-8 py-5 rounded-full transition-all border-2 border-[#8B7BA8] hover:shadow-xl font-semibold text-lg"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                View Rules
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center relative"
          >
            <motion.div
              className="relative"
              style={{
                y: mascotY,
                rotate: mascotRotate,
                scale: mascotScale,
              }}
            >
              {/* Glowing effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#E97BA0] to-[#8B7BA8] rounded-full blur-3xl"
              ></motion.div>

              {/* Mascot */}
              <motion.img
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={mascot}
                alt="MMI Mascot"
                className="relative w-72 md:w-96 lg:w-[500px] h-auto drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-[#8B7BA8] rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#8B7BA8] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
