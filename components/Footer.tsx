"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <h3 className="font-bold text-lg text-white">BHDI</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Broad House Development Initiative - Transforming lives through
              welfare support, education, and empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "What We Do", href: "#whatwedo" },
                { name: "Our Impact", href: "#impact" },
                { name: "Get Involved", href: "#involved" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: "Annual Reports", href: "#" },
                { name: "Financial Reports", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Use", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@bhdi.org"
                  className="hover:text-orange-400 transition-colors break-all"
                >
                  info@bhdi.org
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-orange-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Your Address<br />
                  City, Country
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 BHDI. All rights reserved.</p>
            <p>
              Made with{" "}
              <span className="text-orange-400">♥</span> for communities in need
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
