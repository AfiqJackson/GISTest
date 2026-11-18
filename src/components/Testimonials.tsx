import React from 'react';
import { TESTIMONIALS } from '../data/gisData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#547A70] bg-[#547A70]/10 px-3 py-1 rounded-full">
            Parent & Student Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            What Parents and Alumni Say About GIS
          </h2>
          <p className="text-base text-[#263442]/80">
            Hear from families in Negeri Sembilan and across Malaysia who have trusted GIS with their children’s post-secondary education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F4F1EA] rounded-3xl p-8 shadow-sm border border-gray-200/80 flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 text-[#102C46]/10">
                <Quote className="w-12 h-12" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#D5A64B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-[#263442]/85 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-300/60 flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#102C46]">{t.author}</h4>
                  <p className="text-xs text-[#547A70] font-medium">{t.role}</p>
                  <p className="text-[11px] text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
