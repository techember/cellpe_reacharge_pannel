import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[#B9FBC0]/30 via-[#A6E3E9]/30 to-[#4FC3F7]/30 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-teal-950 mb-4">Contact Us</h1>
          <p className="text-gray-800 text-lg">
            Have questions or feedback? Reach out to us and we’ll get back to you promptly.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {[
            {
              icon: MapPin,
              title: "Address",
              desc: `Malhar Singh, G-1/464, DAL MIL ROAD,
             PILLAR NO-677, WEST UTTAM NAGAR METRO
             STATION, NEAR VISHAL MEGA MART, Uttam
             Nagar, PO: D.k Mohan Garden, DIST: West Delhi,
             Delhi - 110059`,
            },
            {
              icon: Mail,
              title: "Email",
              desc: "Officialcellpe@gmial.com",
            },
            {
              icon: Phone,
              title: "Phone",
              desc: "+91 7042924765",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-[#B9FBC0] via-[#A6E3E9] to-[#4FC3F7] shadow-lg hover:shadow-2xl transition cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-teal-950 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-900 text-center text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-[#B9FBC0]/40 via-[#A6E3E9]/40 to-[#4FC3F7]/40 shadow-xl backdrop-blur-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-800"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold shadow-lg transition
                ${status === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-teal-950 hover:bg-teal-800 text-white"}
              `}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && <p className="text-green-600 mt-4"> ✅ Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600 mt-4"> ❌ Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
