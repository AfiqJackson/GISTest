import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, ShieldCheck, User, Phone, Mail, BookOpen } from 'lucide-react';
import { PROGRAMMES } from '../data/gisData';
import { LeadSubmission, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../types';

interface EnquiryFormProps {
  onLeadSubmitted: (lead: LeadSubmission) => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ onLeadSubmitted }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [programmeInterest, setProgrammeInterest] = useState('General Enquiry');
  const [remarks, setRemarks] = useState('');
  const [consent, setConsent] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !phoneNumber.trim() || !emailAddress.trim()) {
      setErrorMessage('Please fill in all required fields (Full Name, Phone Number, and Email Address).');
      return;
    }

    if (!consent) {
      setErrorMessage('Please check the consent box to allow GIS to respond to your enquiry.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const newLead: LeadSubmission = {
        id: 'lead-' + Date.now(),
        submittedAt: new Date().toLocaleString(),
        fullName,
        phoneNumber,
        emailAddress,
        programmeInterest,
        enquirySource: 'GIS Landing Page',
        enquiryStatus: 'New',
        remarks
      };

      // Save to localStorage leads
      const existingLeadsStr = localStorage.getItem('gis_leads');
      const existingLeads: LeadSubmission[] = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      localStorage.setItem('gis_leads', JSON.stringify([newLead, ...existingLeads]));

      onLeadSubmitted(newLead);
      setSubmitting(false);
      setSuccess(true);

      // Construct WhatsApp pre-filled message
      const waMsg = encodeURIComponent(`Hi, I am ${fullName} and interested in GIS offerings. This is my ${phoneNumber} and ${emailAddress}. Please contact me and provide further informations.`);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

      // Open WhatsApp in new tab after short delay
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);

    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#102C46] bg-[#102C46]/10 px-3 py-1 rounded-full">
              Get in Touch with GIS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46] leading-tight">
              Let's Talk About Your Child's Future.
            </h2>

            <p className="text-base text-[#263442]/80 leading-relaxed">
              Have questions about entry requirements, campus visits, or financial assistance? Our friendly admissions counsellors at Nilai are ready to assist you.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F1EA]">
                <div className="w-10 h-10 rounded-xl bg-[#102C46] text-[#D5A64B] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#102C46]">Direct WhatsApp Enquiry</h4>
                  <p className="text-xs text-[#263442]/70">Fast response on {WHATSAPP_DISPLAY}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4F1EA]">
                <div className="w-10 h-10 rounded-xl bg-[#102C46] text-[#D5A64B] flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#102C46]">Campus Location</h4>
                  <p className="text-xs text-[#263442]/70">Global Institute of Studies, Putra Nilai, 71800 Nilai, Negeri Sembilan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-[#102C46] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5A64B]/10 rounded-full blur-3xl pointer-events-none"></div>

              {success ? (
                <div className="text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enquiry Received Successfully!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-white">{fullName}</span>. Your enquiry has been recorded in our GIS admissions system. WhatsApp has been opened for instant chat.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFullName('');
                      setPhoneNumber('');
                      setEmailAddress('');
                      setRemarks('');
                      setConsent(false);
                    }}
                    className="bg-[#D5A64B] text-[#102C46] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#c2933e] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white">Programme & Counselling Enquiry</h3>
                    <p className="text-xs text-gray-300 mt-1">Fill in your details and our team will contact you shortly.</p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-500/20 border border-red-500/40 text-red-200 p-3.5 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Puan Aminah binti Rahman"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D5A64B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-200">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 011-6535 5635"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D5A64B]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-200">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          required
                          placeholder="e.g. parent@email.com"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D5A64B]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200">Programme Interest</label>
                    <select
                      value={programmeInterest}
                      onChange={(e) => setProgrammeInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1a3d5e] border border-white/20 text-white text-sm focus:outline-none focus:border-[#D5A64B]"
                    >
                      <option value="General Enquiry">General Enquiry & Guidance</option>
                      {PROGRAMMES.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-200">Remarks / Questions (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Any specific questions regarding age requirements, hostel, or PTPTN..."
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D5A64B] resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 rounded text-[#D5A64B] focus:ring-[#D5A64B]"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-300 leading-snug">
                      I agree that my information will be used by GIS to respond to this enquiry and handled according to the published privacy notice.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#D5A64B] hover:bg-[#c2933e] text-[#102C46] py-4 rounded-xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 fill-current" />
                        <span>Submit & Open WhatsApp</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-gray-400">
                    * WhatsApp click-to-chat opens with pre-filled message. You will manually press Send.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
