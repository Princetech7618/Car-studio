"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Privacy <span className="text-blue-600">& Policy</span>
        </h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At CarStudio, your privacy is our top priority. This Privacy Policy
              explains how we collect, use, and protect your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information such as your name, email address,
              phone number, and other details you provide when using our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used to provide our services, improve user experience,
              communicate important updates, and for marketing purposes with your consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience
              on our website. You can manage cookie preferences in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Data Sharing & Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell your personal information. We may share data with trusted
              third-party service providers to operate our services. We implement
              industry-standard security measures to protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal information.
              You can contact us to exercise these rights or to request a copy of your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. Continued use of our website
              indicates your acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at 
              <span className="text-blue-600 underline"> support@carstudio.com</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
