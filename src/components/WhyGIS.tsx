import React from 'react';
import { Award, Users, BookOpen, Briefcase, Heart, CheckCircle } from 'lucide-react';

export const WhyGIS: React.FC = () => {
  const strengths = [
    {
      title: 'Experienced Lecturers & Trainers',
      description: 'Industry veterans and qualified educators dedicated to mentoring teenagers.',
      icon: Award
    },
    {
      title: 'Practical, Hands-On Learning',
      description: 'State-of-the-art workshops, labs, and practical training facilities in Nilai.',
      icon: BookOpen
    },
    {
      title: 'Holistic Student Guidance',
      description: 'Mentor-mentee support system, hostel wardens, and pastoral care.',
      icon: Heart
    },
    {
      title: 'Industry Relationships & MOUs',
      description: 'Meaningful partnerships offering practical training exposure and career pathways.',
      icon: Briefcase
    },
    {
      title: 'Supportive Campus Environment',
      description: 'A welcoming, secure community designed for focused learning and personal growth.',
      icon: Users
    }
  ];

  return (
    <section id="why-gis" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D5A64B] bg-[#D5A64B]/10 px-3 py-1 rounded-full">
            Why Choose GIS Nilai
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            Built on Trust, Experience, and Student Success
          </h2>
          <p className="text-base text-[#263442]/80">
            Parents choose Global Institute of Studies for our unwavering commitment to academic excellence, student safety, and practical career preparation.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-200/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#102C46] text-[#D5A64B] flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#102C46]">{item.title}</h3>
                  <p className="text-sm text-[#263442]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#547A70]">
                  <CheckCircle className="w-4 h-4 text-[#D5A64B]" />
                  <span>Verified GIS Strength</span>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-[#102C46] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#D5A64B] uppercase tracking-wider">Visit Our Campus</span>
              <h3 className="text-2xl font-bold">Experience GIS Nilai Firsthand</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We invite parents and teenagers to tour our campus facilities, meet our lecturers, and discuss your child's educational pathway in person.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#D5A64B] hover:bg-[#c2933e] text-[#102C46] px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <span>Schedule a Campus Visit</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
