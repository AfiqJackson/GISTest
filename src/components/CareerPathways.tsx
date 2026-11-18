import React from 'react';
import { Briefcase, Building2, Handshake, CheckCircle2 } from 'lucide-react';

export const CareerPathways: React.FC = () => {
  const points = [
    'Industry-informed practical learning integrated into curriculum design.',
    'Meaningful exposure to professional work environments and operational standards.',
    'Strategic industry connections through documented Memorandums of Understanding (MOUs).',
    'Career guidance, resume workshops, and interview preparation for graduating students.'
  ];

  return (
    <section id="career-pathways" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#547A70]/10 text-[#547A70] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-[#547A70]" />
              Industry & Career Pillar
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46] leading-tight">
              Preparing Students for the World of Work.
            </h2>

            <p className="text-base text-[#263442]/80 leading-relaxed">
              At GIS Nilai, education goes beyond textbooks. We bridge academic learning with practical industry exposure, ensuring our students graduate with the confidence and competencies demanded by modern employers.
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#547A70] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#263442] font-medium">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 p-5 bg-white rounded-xl border border-gray-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102C46] mb-1">Important Note on Industry MOUs</h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed">
                MOUs provide industry exposure and employment pathway opportunities. GIS maintains transparent standards and does not make unverified guaranteed job placement claims.
              </p>
            </div>
          </div>

          {/* Image / Card Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-[#102C46]/10 rounded-3xl transform rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
              alt="Students in practical training workshop"
              className="relative rounded-2xl shadow-xl w-full h-[420px] object-cover object-center"
            />
            <div className="absolute bottom-6 right-6 bg-[#102C46] text-white p-4 rounded-xl shadow-lg border border-white/10 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D5A64B] flex items-center justify-center text-[#102C46] font-bold">
                  <Handshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Industry Partners</h4>
                  <p className="text-xs text-gray-300">Practical exposure & MOUs</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
