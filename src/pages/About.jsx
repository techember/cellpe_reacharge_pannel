import { motion } from "framer-motion";
import { Award, Shield, Users, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      desc: "End-to-end encryption ensures your data and money stay safe.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Recharges and payments happen instantly — no delays.",
    },
    {
      icon: Users,
      title: "Made for Everyone",
      desc: "From students to families, we simplify ments for all.",
    },
    {
      icon: Award,
      title: "Rewarding",
      desc: "Enjoy cashback, loyalty rewards, and exclusive offers.",
    },
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero / Introduction */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-teal-950 leading-tight">
            About{" "}
            <span className="bg-gradient-to-br from-[#8FCF9C] via-[#73C6D6] to-[#2196F3] bg-clip-text text-transparent">CELLPE</span>
          </h1>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
            CellPe is your all-in-one digital ment app for{" "}
            <strong>mobile recharge,travel bookings, and city services</strong>.
            One app, <strong>all solutions</strong> — fast, secure, and rewarding.
          </p>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed">
            Enjoy instant transactions, cashback rewards, and 24/7 support, making payments
            effortless and reliable wherever you are.
          </p>
        </div>
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/phone-mock.png"
            alt="CellPe App Preview"
            className="w-72 md:w-96 lg:w-[400px] drop-shadow-2xl rounded-3xl"
          />
          {/* Subtle glow behind phone */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#B9FBC0]/40 via-[#A6E3E9]/40 to-[#4FC3F7]/40 blur-3xl"></div>
        </motion.div>
      </motion.div>

      {/* Features / Why CELL PE */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-950 mb-6">
          Why Choose CellPe?
        </h2>
        <p className="text-gray-900 text-center max-w-3xl mx-auto mb-12 text-lg">
          CellPe combines <strong>all essential services</strong> in a single, smooth app.
          With <strong>bank-grade security, instant payments, and rewards</strong>, you can
          manage everything without switching apps.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#B9FBC0] via-[#A6E3E9] to-[#4FC3F7] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full mx-auto mb-4 shadow">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-teal-950 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-900 text-sm text-center">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Vision */}
      <motion.div
        className="bg-teal-950 text-white py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            At CellPe, we believe digital payments should be{" "}
            <strong>simple, reliable, and rewarding</strong>. Our vision is to empower every
            user with a <strong>single app for all essential ments</strong>, making finance
            smarter and accessible for everyone.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
