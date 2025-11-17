import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const phoneScreens = [
    "/images/screen1.png",
    "/images/screen2.png",
    "/images/screen3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phoneScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#0A224A] via-[#0D2D64] to-[#00C853]/20 text-white pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">

        {/* Left Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Recharge Faster with  
            <span className="text-[#00C853]"> CellPe</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg">
            Quick, safe and super-easy mobile recharges — powered by a modern and fast UI.
          </p>

          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#download"
              className="bg-[#00C853] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-[#00b846] transition"
            >
              Download App
            </a>
            <a
              href="/about"
              className="bg-white text-[#0A224A] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right – Auto-Changing Phone Screens */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0 relative">
          <motion.img
            key={currentIndex}
            src={phoneScreens[currentIndex]}
            alt="Phone Screen"
            className="h-[480px] w-auto rounded-3xl shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>

      </div>
    </section>
  );
}
