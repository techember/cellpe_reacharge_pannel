export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-700 leading-relaxed">
          When you visit or buy something from <strong>CELLPE</strong>, this Privacy Policy applies
          and explains how your personal data is collected, used, and shared.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Information we collect:
            </h2>
            <p className="text-gray-700">
              We automatically gather certain information about your device when you
              access CELLPE, including your browser, IP address, time zone, and cookies.
              We also track pages you view, search keywords, and interactions. This is
              called <strong>Device Information</strong>.
            </p>
            <p className="text-gray-700 mt-2">
              Additionally, we collect <strong>Personal Information</strong> when you
              use our services or platform, including name, address, phone number, email,
              and contacts. This helps us provide services and improve your experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Technologies we use:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Cookies — files on your device containing a unique ID</li>
              <li>Log files — track site activity, IP, browser type, and timestamps</li>
              <li>Order information — name, billing/shipping address, ment info</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              How we use your information:
            </h2>
            <p className="text-gray-700">
              To fulfill orders, handle ments, setup shipments, and send order confirmations.
              We also use this data to contact you, check for fraud, and send relevant offers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Sharing of collected information:
            </h2>
            <p className="text-gray-700">
              We may share information with third parties like Google Analytics for insights,
              or to comply with legal requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Behavioral advertising:
            </h2>
            <p className="text-gray-700">
              We may send marketing emails or ads tailored to your interests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Data retention:
            </h2>
            <p className="text-gray-700">
              We keep order information for 5 years unless you request deletion earlier.
              Data is securely deleted or anonymized after this period.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Updates:
            </h2>
            <p className="text-gray-700">
              We may update this policy to reflect changes in practices or regulations.
              Contact us at <strong>cellpe@gmail.com</strong> for questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
