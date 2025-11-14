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
    <section className="relative bg-gradient-to-br from-[#B9FBC0] via-[#A6E3E9] to-[#4FC3F7] text-sky-950 pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 relative z-10">

        {/* Left Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            All Payments in One App:{" "}
            <span className="text-sky-900 drop-shadow-md">CellPe</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Recharge, book, instantly with India’s most convenient & secure payment app.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-lg hover:bg-sky-700 transition duration-300">
              Get on Google Play
            </button>
          </div>
        </motion.div>

        {/* Right Phone Slideshow */}
        <motion.div
          className="flex-1 mt-8 md:mt-0 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Phone Frame */}
          <div className="relative w-[160px] md:w-[180px] lg:w-[250px] h-[360px] md:h-[400px] lg:h-[500px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-black">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-3xl"></div>

            {/* Slideshow Images */}
            <motion.img
              key={phoneScreens[currentIndex]}
              src={phoneScreens[currentIndex]}
              alt="App Screen"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
