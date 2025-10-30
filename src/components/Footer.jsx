import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* Top Divider */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#0056D2] text-white py-0.5"></div>

      {/* Main Footer Content */}
      <div className="bg-[#E3F2FD] text-gray-700 py-10 text-center text-sm border-t border-blue-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-left">
          
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0056D2] mb-4">
              <span className="text-[#0056D2]">Cell</span>
              <span className="text-[#00C853]">Pe</span> - Recharge App
            </h2>
            <p className="font-medium">
              Our user-friendly interface allows you to easily recharge your
              mobile phones, pay bills, book travel, and access city services — 
              all from one secure app.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-2xl font-bold text-[#0056D2] mb-4">
              Important Links
            </h2>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-[#007BFF] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-[#0056D2] mb-4">
              Contact Details
            </h2>
            <div className="space-y-2 font-medium">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-5 h-5 text-[#0056D2]" />
                <span>New Delhi</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-5 h-5 text-[#0056D2]" />
                <span>cellpe@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-5 h-5 text-[#0056D2]" />
                <span>+91 95995 58707</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#007BFF] to-[#0056D2] text-white py-4 text-center text-sm shadow-inner">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-bold">
            <span className="text-white">Cell</span>
            <span className="text-[#00C853]">Pe</span>
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
