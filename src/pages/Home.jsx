import { motion } from "framer-motion";
import Download from "../components/Download";
import Faqs from "../components/Faqs";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="bg-sky-500 text-white"
      >
        <Hero />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-sky-100 to-sky-300"
      >
        <Services />
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white"
      >
        <Features />
      </motion.div>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-b from-sky-200 to-sky-400"
      >
        <Faqs />
      </motion.section>

      {/* Showcase Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray-50"
      >
        <Showcase />
      </motion.div>

      {/* Download Section */}
      <section
        id="download"
        className="bg-sky-600 text-white border-none"
      >
        <Download />
      </section>
    </div>
  );
}
