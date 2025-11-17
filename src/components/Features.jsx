import { Gift, Headphones, Shield, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure Payments", desc: "Your transactions are protected with bank-grade encryption." },
  { icon: Zap, title: "Lightning Fast", desc: "Instant recharges, bookings, and  payments in seconds." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help, whenever you need assistance." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn cashback, discounts, and exciting offers on every payment." },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-[#0A224A]">
          Why Choose <span className="text-[#00C853]">CellPe?</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer 
              bg-gradient-to-br from-[#0A224A] via-[#0D2D64] to-[#00C853]/20 text-white border border-white/10"
            >
              {/* Icon inside circle */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-[#0A224A]" />
              </div>

              <h3 className="font-bold text-lg mb-2 text-white">{f.title}</h3>
              <p className="font-medium text-gray-200 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
