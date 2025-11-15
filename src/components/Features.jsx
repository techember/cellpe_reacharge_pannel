import { Gift, Headphones, Shield, Zap } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure payments", desc: "Your transactions are protected with bank-grade encryption." },
  { icon: Zap, title: "Lightning Fast", desc: "Instant recharges, bookings,  in seconds." },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help, whenever you need assistance." },
  { icon: Gift, title: "Exclusive Rewards", desc: "Earn cashback, discounts, and exciting offers on every ment." },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">Why Choose CellPe?</h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#B9FBC0] via-[#A6E3E9] to-[#4FC3F7] shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              {/* Icon inside circle */}
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-teal-950" />
              </div>

              <h3 className="font-bold text-lg mb-2 text-teal-950">{f.title}</h3>
              <p className="font-semibold text-gray-800 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
