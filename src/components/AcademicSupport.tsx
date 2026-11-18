import React from 'react';
import { CheckCircle2, BookOpen, UserCheck, TrendingUp } from 'lucide-react';

export const AcademicSupport: React.FC = () => {
  const points = [
    'Students have different strengths, learning speeds and support needs.',
    'Dedicated mentors provide regular guidance and encouragement.',
    'Students who need additional help receive appropriate remedial guidance.',
    'Students with strong potential are encouraged to excel further and lead.',
    'The primary aim is to support continuous student progress and build self-confidence.'
  ];

  return (
    <section id="academic-support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-[#D5A64B]/10 rounded-3xl transform -rotate-1"></div>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
              alt="Lecturer guiding students in classroom"
              className="relative rounded-2xl shadow-xl w-full h-[420px] object-cover object-center"
            />
            <div className="absolute bottom-6 left-6 bg-[#102C46] text-white p-4 rounded-xl shadow-lg border border-white/10 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D5A64B] flex items-center justify-center text-[#102C46] font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Mentor-Mentee System</h4>
                  <p className="text-xs text-gray-300">Personalized attention for every teen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#102C46]/10 text-[#102C46] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#102C46]" />
              Academic Pillar
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46] leading-tight">
              Every Student Has Potential. We Help Them Move Forward.
            </h2>

            <p className="text-base text-[#263442]/80 leading-relaxed">
              Transitioning from secondary school to post-secondary or technical education is an exciting step. At GIS Nilai, our Mentor-Mentee Programme ensures no student is left behind, while nurturing high achievers to reach their absolute best.
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#547A70] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#263442] font-medium">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 p-5 bg-[#F4F1EA] rounded-xl border border-gray-200">
              <h4 className="text-sm font-bold text-[#102C46] flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-[#D5A64B]" />
                Building Lifelong Confidence
              </h4>
              <p className="text-xs text-[#263442]/70 leading-relaxed">
                Our qualified lecturers and trainers maintain an open-door policy, providing academic counseling and study technique workshops tailored for teenagers aged 15 and above.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
