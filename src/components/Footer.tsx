import React from 'react';
import { GIS_ADDRESS, GIS_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../types';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-[#0b1d2e] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#D5A64B] flex items-center justify-center text-[#102C46] font-extrabold text-xl shadow-md">
                GIS
              </div>
              <div>
                <span className="block font-bold text-lg tracking-tight leading-tight text-white">
                  Global Institute of Studies
                </span>
                <span className="block text-xs font-medium text-[#D5A64B] tracking-wider uppercase">
                  Nilai, Negeri Sembilan
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering teenagers aged 15 and above with quality post-secondary education, practical TVET skills, academic mentoring, and dedicated support.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba5a] transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D5A64B]">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-[#D5A64B] transition-colors">Home</a></li>
              <li><a href="#why-gis" className="hover:text-[#D5A64B] transition-colors">About GIS</a></li>
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Programmes</a></li>
              <li><a href="#student-support" className="hover:text-[#D5A64B] transition-colors">Student Support</a></li>
              <li><a href="#faq" className="hover:text-[#D5A64B] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Programmes Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D5A64B]">Study Pathways</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Culinary Arts & Hospitality</a></li>
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Automotive Technology</a></li>
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Welding & Electrical</a></li>
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Early Childhood Education</a></li>
              <li><a href="#programmes" className="hover:text-[#D5A64B] transition-colors">Healthcare & Elderly Care</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D5A64B]">Contact & Location</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D5A64B] shrink-0 mt-0.5" />
                <span>{GIS_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D5A64B] shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D5A64B] shrink-0" />
                <span>{GIS_EMAIL}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Global Institute of Studies (GIS), Nilai. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={onOpenPrivacy} className="hover:text-[#D5A64B] transition-colors cursor-pointer underline">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={onOpenTerms} className="hover:text-[#D5A64B] transition-colors cursor-pointer underline">
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
