import React from 'react';
import { BookOpen, Wallet, Shield, Briefcase, ArrowRight } from 'lucide-react';

export const Commitments: React.FC = () => {
  const commitments = [
    {
      title: 'Academic Support',
      subtitle: 'Mentor-Mentee Programme',
      description: 'Tailored guidance for students with different learning needs, speeds, and abilities to build confidence and ensure progress.',
      icon: BookOpen,
      href: '#academic-support',
      bgAccent: 'bg-blue-50 text-[#102C46]',
      borderAccent: 'border-blue-100 hover:border-[#102C46]',
    },
    {
      title: 'Financial Assistance',
      subtitle: 'Education Funding Support',
      description: 'Guidance and advisory on PTPTN, PTPK, KWSP account withdrawals, Baitulmal, and applicable funding schemes.',
      icon: Wallet,
      href: '#financial-assistance',
      bgAccent: 'bg-amber-50 text-[#D5A64B]',
      borderAccent: 'border-amber-100 hover:border-[#D5A64B]',
    },
    {
      title: 'Student Safety',
      subtitle: 'Warden & Welfare Care',
      description: 'Dedicated warden supervision, student welfare support, and a structured 24-hour parent contact-response arrangement.',
      icon: Shield,
      href: '#student-welfare',
      bgAccent: 'bg-emerald-50 text-[#547A70]',
      borderAccent: 'border-emerald-100 hover:border-[#547A70]',
    },
    {
      title: 'Career Opportunities',
      subtitle: 'Industry MOUs & Exposure',
      description: 'Real-world practical training, industry partnerships, and guidance towards meaningful employment pathways.',
      icon: Briefcase,
      href: '#career-pathways',
      bgAccent: 'bg-purple-50 text-purple-800',
      borderAccent: 'border-purple-100 hover:border-purple-800',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#547A70] bg-[#547A70]/10 px-3 py-1 rounded-full">
            Our Four Pillars for Parents
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            How GIS Supports Your Child Every Step of the Way
          </h2>
          <p className="text-base text-[#263442]/80">
            We understand that choosing post-secondary education is a major milestone for parents and teenagers. Here is how our Nilai campus ensures holistic development.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border ${item.borderAccent} flex flex-col justify-between group transform hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${item.bgAccent} flex items-center justify-center shadow-xs`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold text-[#547A70] uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#102C46] group-hover:text-[#D5A64B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#263442]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-sm font-semibold text-[#102C46] group-hover:text-[#D5A64B]">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
