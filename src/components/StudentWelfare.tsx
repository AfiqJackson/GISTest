import React from 'react';
import { ShieldCheck, HeartHandshake, PhoneCall, Home } from 'lucide-react';

export const StudentWelfare: React.FC = () => {
  const welfarePoints = [
    {
      title: 'Warden Supervision & Support',
      description: 'Dedicated residential wardens providing daily guidance, safety oversight, and a nurturing environment in student accommodation.',
      icon: ShieldCheck
    },
    {
      title: 'Student Welfare Guidance',
      description: 'Dedicated pastoral care helping teenagers adjust to campus life, time management, and independent living away from home.',
      icon: HeartHandshake
    },
    {
      title: '24-Hour Parent Contact Arrangement',
      description: 'A structured parent-student communication channel with a stated 24-hour response arrangement for total peace of mind.',
      icon: PhoneCall
    },
    {
      title: 'Hostel & Community Living',
      description: 'Safe, comfortable accommodation designed to foster positive peer friendships, group study, and disciplined daily routines.',
      icon: Home
    }
  ];

  return (
    <section id="student-support" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#547A70] bg-[#547A70]/10 px-3 py-1 rounded-full">
            Safety & Welfare
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            Your Child May Be Away from Home, But They Should Not Feel Alone.
          </h2>
          <p className="text-base text-[#263442]/80">
            We provide a secure, supervised, and welcoming living-learning environment specifically tailored for teenagers embarking on their higher education journey.
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {welfarePoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#F4F1EA] rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#102C46] text-[#D5A64B] flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#102C46]">{item.title}</h3>
                  <p className="text-sm text-[#263442]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-[#102C46] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-[#D5A64B] uppercase tracking-wider">Parental Peace of Mind</span>
            <h3 className="text-2xl font-bold">Have Questions About Accommodation or Safety?</h3>
            <p className="text-sm text-gray-300 max-w-xl">
              Our student affairs team is always ready to discuss hostel rules, weekend activities, and emergency protocols with parents.
            </p>
          </div>
          <a
            href="https://wa.me/601165355635?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20GIS%20Nilai%20hostel%20and%20student%20welfare."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Chat with Warden Team</span>
          </a>
        </div>

      </div>
    </section>
  );
};
