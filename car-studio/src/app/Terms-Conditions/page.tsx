"use client";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20 mt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Terms <span className="text-blue-600">& Conditions</span>
        </h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to CarStudio. By accessing our website, you agree to these terms
              and conditions. Please read them carefully.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Use of Website</h2>
            <p className="text-gray-700 leading-relaxed">
              You may use the website for personal and non-commercial purposes only.
              Unauthorized use may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              Some parts of the website require you to create an account. You are
              responsible for maintaining the confidentiality of your login details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on CarStudio, including images, logos, and text, is
              protected by copyright. You may not reproduce, modify, or distribute
              any part without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              CarStudio is not liable for any direct, indirect, or consequential
              damages arising from your use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update these terms at any time. Continued
              use of the website constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please
              contact us at <span className="text-blue-600 underline">support@carstudio.com</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
