import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-01-08T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="relative">
      <motion.div
        className="bg-white rounded-2xl p-6 shadow-xl border-2 border-[#8B7BA8]/20"
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl font-bold bg-gradient-to-br from-[#E97BA0] to-[#8B7BA8] bg-clip-text text-transparent"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {value.toString().padStart(2, '0')}
          </motion.div>
        </AnimatePresence>
        <div className="text-sm text-gray-600 mt-2 uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {label}
        </div>
      </motion.div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#C5A8D4] to-[#8B7BA8] rounded-3xl p-10 my-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <h3 className="text-4xl text-white text-center mb-8" style={{ fontFamily: 'Syne, sans-serif' }}>
          ⏰ Event Countdown
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </motion.div>
  );
}
