import { Link } from 'react-router-dom';
import logoImg from '../../imports/probea-bar.png';

export default function Header() {
  return (
    <header className="bg-[#0B1C2E] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Probea AI"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#solutions" className="text-gray-300 hover:text-[var(--cyan)] transition-colors">
              Solutions
            </a>
            <a href="/#technology" className="text-gray-300 hover:text-[var(--cyan)] transition-colors">
              Technology
            </a>
            <Link to="/about" className="text-gray-300 hover:text-[var(--cyan)] transition-colors">
              About
            </Link>
            <a href="/#contact" className="text-gray-300 hover:text-[var(--cyan)] transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://probea.in/login" className="text-gray-300 hover:text-white transition-colors duration-200">
              Sign in
            </a>
            <a href="/#get-started" className="bg-[#4DD9D9] text-[#0B1C2E] px-6 py-2 rounded-lg hover:bg-[#6FE5E5] transition-all duration-200 font-semibold">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
