import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Calendar, BookOpen, Shield, Award } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../types';

interface HeaderProps {
  onOpenCounselling: () => void;
  onOpenVirtualTour: () => void;
  onOpenAdminLeads: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCounselling, onOpenVirtualTour, onOpenAdminLeads }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent("Hi, I am interested in GIS offerings and would like to find out more.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About GIS', href: '#why-gis' },
    { name: 'Programmes', href: '#programmes' },
    { name: 'Student Support', href: '#student-support' },
    { name: 'Why GIS', href: '#why-gis' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      {/* Top announcement bar */}
      <div className="bg-[#102C46] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <span className="bg-[#D5A64B] text-[#102C46] font-semibold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Nilai Campus
            </span>
            <span>Intakes Open for SPM, PT3 & SKM Leavers (Ages 15 & Above)</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenVirtualTour}
              className="hover:text-[#D5A64B] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" /> Virtual Tour
            </button>
            <span className="text-gray-400">|</span>
            <button 
              onClick={onOpenCounselling}
              className="hover:text-[#D5A64B] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Consultation
            </button>
            <span className="text-gray-400">|</span>
            <button 
              onClick={onOpenAdminLeads}
              className="text-gray-300 hover:text-[#D5A64B] transition-colors text-[11px] underline cursor-pointer"
              title="View Enquiries Log (Demo)"
            >
              Admin Lead Logs
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-[#102C46] flex items-center justify-center text-[#D5A64B] font-bold text-xl shadow-md group-hover:bg-[#1a3d5e] transition-colors">
              GIS
            </div>
            <div>
              <span className="block font-bold text-lg text-[#102C46] tracking-tight leading-tight">
                Global Institute of Studies
              </span>
              <span className="block text-xs font-medium text-[#547A70] tracking-wider uppercase">
                Nilai, Negeri Sembilan
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#263442] hover:text-[#D5A64B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <button
              onClick={onOpenCounselling}
              className="bg-[#102C46] hover:bg-[#1a3d5e] text-white px-4 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all cursor-pointer"
            >
              Speak to Team
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-2 rounded-lg"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#102C46] hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#263442] hover:bg-[#F4F1EA] hover:text-[#102C46] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium text-sm shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCounselling();
              }}
              className="w-full bg-[#102C46] text-white px-4 py-3 rounded-xl font-medium text-sm shadow-sm"
            >
              Speak to Our Team
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
