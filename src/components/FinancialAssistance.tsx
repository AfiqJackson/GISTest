import React, { useState } from 'react';
import { Wallet, CheckCircle, HelpCircle, ArrowRight, ExternalLink, Calculator } from 'lucide-react';

interface FinancialAssistanceProps {
  onOpenCounselling: () => void;
}

export const FinancialAssistance: React.FC<FinancialAssistanceProps> = ({ onOpenCounselling }) => {
  const [selectedScheme, setSelectedScheme] = useState<'ptptn' | 'ptpk' | 'kwsp' | 'baitulmal'>('ptptn');

  const schemes = {
    ptptn: {
      name: 'PTPTN (Higher Education Fund)',
      badge: 'National Education Loan',
      description: 'Available for eligible Malaysian students pursuing recognised diploma and certificate programmes at GIS.',
      details: [
        'Covers tuition fee financing and partial living allowances.',
        'Low, subsidized administrative profit rate.',
        'Flexible repayment terms commencing after graduation.'
      ]
    },
    ptpk: {
      name: 'PTPK (Skills Development Fund)',
      badge: 'TVET & Skills Funding',
      description: 'Specifically tailored for vocational and technical SKM certificate courses to support tuition and living expenses.',
      details: [
        'Designed for skills-based and TVET pathways.',
        'Allowance provided during training period.',
        'Direct application support by GIS financial advisors.'
      ]
    },
    kwsp: {
      name: 'KWSP / EPF Account Withdrawal',
      badge: 'Parental Savings Access',
      description: 'Parents can utilize Account 2 withdrawals to fund their children’s higher education tuition fees smoothly.',
      details: [
        'Reduces immediate out-of-pocket cash flow pressure.',
        'Direct application via EPF i-Akaun portal.',
        'GIS administrative team provides supporting fee letters.'
      ]
    },
    baitulmal: {
      name: 'Baitulmal & State Zakat',
      badge: 'Community & Religious Aid',
      description: 'Financial sponsorship and educational aid for eligible Muslim students through state Islamic religious councils.',
      details: [
        'Subject to individual state council eligibility criteria.',
        'Covers registration, hostel, and tuition fees.',
        'Assistance letters provided upon successful enrollment.'
      ]
    }
  };

  return (
    <section id="financial-assistance" className="py-20 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D5A64B] bg-[#D5A64B]/10 px-3 py-1 rounded-full">
            Financial Guidance & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            Don't Let Financial Questions Stand Between Your Child and Further Education.
          </h2>
          <p className="text-base text-[#263442]/80">
            We guide parents step-by-step through available educational funding routes, loans, and withdrawal options so you can plan with confidence.
          </p>
        </div>

        {/* Interactive Scheme Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-[#102C46] uppercase tracking-wider mb-2 px-1">
              Select Funding Route to Learn More:
            </h3>
            
            {Object.entries(schemes).map(([key, data]) => {
              const isActive = selectedScheme === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedScheme(key as any)}
                  className={`w-full text-left p-5 rounded-2xl transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#102C46] text-white shadow-lg transform scale-[1.02]'
                      : 'bg-white text-[#263442] hover:bg-gray-50 border border-gray-200 shadow-xs'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${isActive ? 'bg-[#D5A64B] text-[#102C46]' : 'bg-[#102C46]/10 text-[#102C46]'}`}>
                      {data.badge}
                    </span>
                    <h4 className="font-bold text-base">{data.name}</h4>
                  </div>
                  <ArrowRight className={`w-5 h-5 ${isActive ? 'text-[#D5A64B]' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Details Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#D5A64B]/20 flex items-center justify-center text-[#102C46]">
                  <Wallet className="w-6 h-6 text-[#D5A64B]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#547A70]">Funding Option</span>
                  <h3 className="text-2xl font-extrabold text-[#102C46]">{schemes[selectedScheme].name}</h3>
                </div>
              </div>

              <p className="text-base text-[#263442]/80 leading-relaxed">
                {schemes[selectedScheme].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#102C46]">Key Highlights & Support:</h4>
                {schemes[selectedScheme].details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-[#F4F1EA] p-3.5 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-[#547A70] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#263442] font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-gray-500">
                  * Eligibility, funding limits & application processes must be confirmed with the provider and GIS.
                </span>
                <button
                  onClick={onOpenCounselling}
                  className="w-full sm:w-auto bg-[#102C46] hover:bg-[#1a3d5e] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  Speak to Us About Financing
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
