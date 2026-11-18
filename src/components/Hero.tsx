import React from 'react';
import { ShieldCheck, ArrowRight, PhoneCall, Sparkles, GraduationCap, Users } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../types';

interface HeroProps {
  onOpenCounselling: () => void;
  onOpenVirtualTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCounselling, onOpenVirtualTour }) => {
  const whatsappMessage = encodeURIComponent("Hi, I would like to enquire about GIS Nilai programmes for my child.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative bg-[#102C46] text-white overflow-hidden py-16 lg:py-24">
      {/* Background Image with Cinematic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85"
          alt="Malaysian family and students at campus"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 animate-pulse duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102C46] via-[#102C46]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#102C46] via-transparent to-[#102C46]/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#D5A64B]/20 border border-[#D5A64B]/40 px-3 py-1.5 rounded-full text-[#D5A64B] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D5A64B]" />
              Global Institute of Studies (GIS), Nilai
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Your Child's Future. <br />
              <span className="text-[#D5A64B]">Our Commitment.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl">
              Quality education, practical skills and real career opportunities. At GIS, we understand what matters most to parents. We provide support to help your teenager progress academically, financially, safely and in their career journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 bg-[#D5A64B] hover:bg-[#c2933e] text-[#102C46] px-8 py-4 rounded-xl font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore GIS Programmes</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={onOpenCounselling}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base backdrop-blur-sm transition-all cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-[#D5A64B]" />
                <span>Speak to Our Team</span>
              </button>
            </div>

            {/* Target audience notice */}
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#D5A64B] shrink-0" />
              <span>Information intended for parents of teenagers aged 15 and above. Subject to entry requirements.</span>
            </div>
          </div>

          {/* Right Column: Quick Trust Card / Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative space-y-6">
              <div className="absolute -top-4 -right-4 bg-[#D5A64B] text-[#102C46] font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                Nilai Campus
              </div>

              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#D5A64B]" />
                Why Parents Choose GIS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#547A70]/40 flex items-center justify-center shrink-0 text-[#D5A64B] font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Mentor-Mentee Guidance</h4>
                    <p className="text-xs text-gray-300">Personalised academic support tailored to every student's pace.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#547A70]/40 flex items-center justify-center shrink-0 text-[#D5A64B] font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Financial Assistance Guidance</h4>
                    <p className="text-xs text-gray-300">Assistance with PTPTN, PTPK, KWSP, and Baitulmal applications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#547A70]/40 flex items-center justify-center shrink-0 text-[#D5A64B] font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Safe Hostel & Warden Support</h4>
                    <p className="text-xs text-gray-300">Dedicated supervision with 24-hour parent contact response.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#547A70]/40 flex items-center justify-center shrink-0 text-[#D5A64B] font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Industry MOUs & Pathways</h4>
                    <p className="text-xs text-gray-300">Practical training aligned with real employer requirements.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onOpenVirtualTour}
                  className="text-xs font-semibold text-[#D5A64B] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Take Virtual Campus Tour <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs hover:bg-[#20ba5a]"
                >
                  WhatsApp Us
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
