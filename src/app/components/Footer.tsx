import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../../imports/probea-bar.png';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--navy-dark)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src={logoImg}
                alt="Probea AI"
                className="h-8 w-auto mb-6 cursor-pointer"
              />
            </Link>

            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
              Enabling intelligent, accessible, and data-driven healthcare through scalable AI diagnostic technologies.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--cyan)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400">
                  JD Shubharambh, Vagholi, Pune, Maharashtra 412207
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                <a href="mailto:info@probea.in" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  info@probea.in
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <a href="tel:+919582220608" className="hover:text-[var(--cyan)] transition-colors">+91-9582220608</a>
                  {' • '}
                  <a href="tel:+919731555113" className="hover:text-[var(--cyan)] transition-colors">+91-97315-55113</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-[var(--cyan)] flex-shrink-0" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors"
                >
                  Follow us on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="/#solutions" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/#technology" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="/#integrations" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-sm text-gray-400 hover:text-[var(--cyan)] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © 2026 Probea AI Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
