import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Grid Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/img/logo.png"
                alt="CarStudio Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold text-white">CarStudio</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner in buying and selling cars. Explore the latest
              deals on new and used cars with smart filters and quick search.
            </p>

            <div className="mt-5 space-y-1 text-sm">
              <p>123 Motor Lane, New Delhi</p>
              <p>Mon–Sat 9AM–7PM</p>
              <p>hello@carstudio.example</p>
              <p>+91 98765 43210</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/Newcar" className="hover:text-indigo-400">
                  New Cars
                </Link>
              </li>
              <li>
                <Link href="/Upcomingcars" className="hover:text-indigo-400">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link href="/SellyourCar" className="hover:text-indigo-400">
                  Sell Cars
                </Link>
              </li>
              <li>
                <Link href="/Review" className="hover:text-indigo-400">
                  Car Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/Contactus" className="hover:text-indigo-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/FAQs" className="hover:text-indigo-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/Terms-Conditions" className="hover:text-indigo-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/PrivacyPolicy" className="hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
  <div >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-lg font-bold text-white mb-6">
         Social Media
        </h2>

        <div className="flex justify-center space-x-6">

          {/* Facebook */}
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-10 h-10" />
          </Link>

          {/* Twitter / X */}
          <Link
            href="https://twitter.com"
            target="_blank"
            className="text-blue-400 hover:text-blue-500 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-10 h-10" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-pink-500 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-10 h-10" />
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="text-red-500 hover:text-red-600 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-10 h-10" />
          </Link>

        </div>
      </div>
    </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CarStudio. All rights reserved. ❤️
        </div>
      </div>
    </footer>
  );
}
