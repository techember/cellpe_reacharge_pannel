import { CreditCard, Plane, Smartphone, Tv, TrendingUp } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <ServiceCard
            Icon={Smartphone}
            title="Mobile Recharge"
            description="Quick and secure mobile top-ups for all major operators."
          />

          <ServiceCard
            Icon={Tv}
            title="DTH Recharge"
            description="Instant DTH recharges with flexible plans and exciting offers."
          />

          <ServiceCard
            Icon={CreditCard}
            title="BBPS Bill Payments"
            description="Pay electricity, water, gas, and broadband bills effortlessly in one place."
          />

          <ServiceCard
            Icon={Plane}
            title="Travel Booking"
            description="Book flights, buses, and hotels at the best prices instantly."
          />

          <ServiceCard
            Icon={TrendingUp}
            title="Investments"
            description="Track and invest in stocks, mutual funds, and digital gold securely — all from one app."
          />
        </div>
      </div>
    </section>
  );
}
