import ThemeContext from "@/context/ThemeContext";
import { useContext } from "react";

const HelpAndSupport = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-28 px-6 md:px-20 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Help & Support</h2>

        {/* Introduction */}
        <div className="mb-8">
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            At <strong>Biodekho</strong>, we are committed to providing
            exceptional support to ensure a seamless and comfortable matchmaking
            experience. Whether you have technical questions, account issues, or
            need guidance, our dedicated support team is here for you every step
            of the way.
          </p>
        </div>

        {/* Support Channels */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDarkMode ? "text-BgPrimary" : "text-blue-700"
            }`}
          >
            📞 Support Channels
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            You can reach us through multiple channels:
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Email:</strong> support@biodekho.com
              </li>
              <li>
                <strong>Live Chat:</strong> Available 24/7 in the bottom-right
                corner
              </li>
              <li>
                <strong>Phone:</strong> +880-1234-567890 (Available 10AM – 8PM
                BST)
              </li>
            </ul>
          </p>
        </div>

        {/* FAQs */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDarkMode ? "text-BgPrimary" : "text-purple-700"
            }`}
          >
            ❓ Frequently Asked Questions
          </h3>
          <ul
            className={`list-disc pl-6 shadow-sm text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>How do I create a profile?</li>
            <li>How can I edit or delete my information?</li>
            <li>How do I contact someone I'm interested in?</li>
            <li>What if I encounter a fake profile?</li>
            <li>How can I delete my account?</li>
          </ul>
          <p className="mt-4">
            Visit our full FAQ page for answers to these and more questions.
          </p>
        </div>

        {/* Account & Safety Support */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDarkMode ? "text-BgPrimary" : "text-red-700"
            }`}
          >
            🔒 Account & Safety Support
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            We take your safety seriously. If you feel uncomfortable with
            another user or suspect any suspicious activity, please report it
            immediately. Our team will review the case and take appropriate
            action, including warning, suspension, or removal of the user if
            necessary.
          </p>
        </div>

        {/* Community Guidelines */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDarkMode ? "text-BgPrimary" : "text-green-700"
            }`}
          >
            🌐 Community Guidelines
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            To keep Biodekho safe and respectful, all users must follow our
            community guidelines. These include being respectful, truthful, and
            using the platform solely for genuine matchmaking purposes.
            Violations may result in account suspension.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3
            className={`text-2xl font-semibold mb-3 ${
              isDarkMode ? "text-BgPrimary" : "text-teal-700"
            }`}
          >
            📬 Still Need Help?
          </h3>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            If you couldn’t find what you're looking for or need personal
            support, don’t hesitate to contact us. We’re here to help you build
            meaningful connections with confidence and ease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpAndSupport;
