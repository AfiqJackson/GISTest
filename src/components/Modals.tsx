import React, { useState } from 'react';
import { Programme, LeadSubmission, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from '../types';
import { X, Clock, Award, CheckCircle2, MessageCircle, Calendar, MapPin, Shield, Trash2, Download } from 'lucide-react';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
  onOpenCounselling: () => void;
}

export const ProgrammeModal: React.FC<ProgrammeModalProps> = ({ programme, onClose, onOpenCounselling }) => {
  if (!programme) return null;

  const waMsg = encodeURIComponent(`Hi, I would like to enquire about the ${programme.title} programme at GIS Nilai.`);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#102C46] flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image banner */}
        <div className="relative h-64 bg-gray-100">
          <img src={programme.image} alt={programme.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102C46]/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="bg-[#D5A64B] text-[#102C46] text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
              {programme.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">{programme.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#547A70] bg-[#F4F1EA] p-4 rounded-xl">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#102C46]" /> Duration: {programme.duration}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-[#102C46]" /> Level: {programme.level}</span>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102C46]">Programme Overview</h3>
            <p className="text-sm text-[#263442]/80 leading-relaxed">{programme.fullDescription}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102C46]">Key Highlights & Facilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {programme.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#263442] bg-[#F4F1EA]/60 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-[#547A70] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102C46]">Career Prospects</h3>
            <div className="flex flex-wrap gap-2">
              {programme.careerProspects.map((cp, i) => (
                <span key={i} className="bg-[#102C46]/10 text-[#102C46] text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {cp}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1 bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900">
            <span className="font-bold block mb-1">Entry Requirements Note:</span>
            <p>{programme.entryRequirements}</p>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Programme Enquiry</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenCounselling();
              }}
              className="flex-1 bg-[#102C46] hover:bg-[#1a3d5e] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Book Counselling
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const campusPhotos = [
    { title: 'Main Campus Building & Entrance', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80' },
    { title: 'Modern Culinary Training Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80' },
    { title: 'Automotive Engineering Workshop', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80' },
    { title: 'Student Resource Library & Study Lounge', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/95 text-[#102C46] flex items-center justify-center shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D5A64B] bg-[#D5A64B]/10 px-3 py-1 rounded-full">
              GIS Nilai Campus
            </span>
            <h2 className="text-3xl font-extrabold text-[#102C46]">Virtual Campus Gallery</h2>
            <p className="text-sm text-gray-600">Take a visual tour of our facilities in Putra Nilai, Negeri Sembilan.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusPhotos.map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                <div className="h-56 overflow-hidden">
                  <img src={photo.image} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-sm text-[#102C46] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#D5A64B]" />
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#F4F1EA] rounded-2xl text-center space-y-3">
            <h4 className="font-bold text-[#102C46]">Want to see it in person?</h4>
            <p className="text-xs text-gray-600 max-w-md mx-auto">Parents and students are warmly welcomed to book an official campus visit with our counsellors.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20would%20like%20to%20schedule%20an%20in-person%20campus%20visit%20at%20GIS%20Nilai.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#102C46] text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-[#1a3d5e] transition-colors"
            >
              Book Physical Campus Visit via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: (lead: LeadSubmission) => void;
}

export const CounsellingModal: React.FC<CounsellingModalProps> = ({ isOpen, onClose, onLeadSubmitted }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    const lead: LeadSubmission = {
      id: 'couns-' + Date.now(),
      submittedAt: new Date().toLocaleString(),
      fullName: name,
      phoneNumber: phone,
      emailAddress: email,
      programmeInterest: `Counselling Session (${preferredDate || 'Flexible'})`,
      enquirySource: 'Counselling Booking Modal',
      enquiryStatus: 'New',
    };

    const existingStr = localStorage.getItem('gis_leads');
    const existing = existingStr ? JSON.parse(existingStr) : [];
    localStorage.setItem('gis_leads', JSON.stringify([lead, ...existing]));

    onLeadSubmitted(lead);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#102C46] cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#102C46]">Counselling Requested!</h3>
            <p className="text-xs text-gray-600">Our admissions team will contact you within 24 hours to confirm your session.</p>
            <button onClick={() => { setSubmitted(false); onClose(); }} className="bg-[#102C46] text-white px-6 py-2.5 rounded-xl font-bold text-xs cursor-pointer">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D5A64B] uppercase tracking-wider">GIS Nilai Admissions</span>
              <h3 className="text-2xl font-bold text-[#102C46]">Book a Parent Consultation</h3>
              <p className="text-xs text-gray-600">Speak directly with our academic counsellors about your child's pathway.</p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Parent Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. En. Iskandar"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#263442]">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="011-6535 5635"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46]"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#263442]">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-[#263442]">Preferred Date & Time</label>
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="e.g. This Saturday, 10:00 AM"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#102C46] hover:bg-[#1a3d5e] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Confirm Consultation Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface AdminLeadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLeadsModal: React.FC<AdminLeadsModalProps> = ({ isOpen, onClose }) => {
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    const str = localStorage.getItem('gis_leads');
    return str ? JSON.parse(str) : [];
  });

  if (!isOpen) return null;

  const clearLeads = () => {
    if (window.confirm('Clear all stored enquiry logs?')) {
      localStorage.removeItem('gis_leads');
      setLeads([]);
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Submitted At', 'Full Name', 'Phone', 'Email', 'Programme', 'Source', 'Status'];
    const rows = leads.map(l => [l.id, l.submittedAt, l.fullName, l.phoneNumber, l.emailAddress, l.programmeInterest || '', l.enquirySource, l.enquiryStatus]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'gis_nilai_enquiries_log.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-8">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#102C46] cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#547A70] bg-[#547A70]/10 px-3 py-1 rounded-full">
                Simulated Google Sheet / Database
              </span>
              <h2 className="text-2xl font-extrabold text-[#102C46] mt-1">GIS Admissions Enquiries Log</h2>
            </div>
            <div className="flex items-center gap-2">
              {leads.length > 0 && (
                <>
                  <button onClick={exportCSV} className="flex items-center gap-1 bg-[#102C46] text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer">
                    <Download className="w-3.5 h-3.5" /> Export CSV
                  </button>
                  <button onClick={clearLeads} className="flex items-center gap-1 bg-red-100 text-red-700 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer">
                    <Trash2 className="w-3.5 h-3.5" /> Clear Logs
                  </button>
                </>
              )}
            </div>
          </div>

          {leads.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-gray-500 font-medium text-sm">No enquiries recorded yet. Try submitting the lead form on the landing page!</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-gray-200 rounded-2xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#102C46] text-white">
                    <th className="p-3">Submitted At</th>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">Phone Number</th>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Programme Interest</th>
                    <th className="p-3">Source</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leads.map((l) => (
                    <tr key={l.id} className="hover:bg-gray-50">
                      <td className="p-3 text-gray-500 whitespace-nowrap">{l.submittedAt}</td>
                      <td className="p-3 font-bold text-[#102C46]">{l.fullName}</td>
                      <td className="p-3 text-gray-700 whitespace-nowrap">{l.phoneNumber}</td>
                      <td className="p-3 text-gray-700">{l.emailAddress}</td>
                      <td className="p-3 text-gray-700">{l.programmeInterest || '-'}</td>
                      <td className="p-3 text-gray-500">{l.enquirySource}</td>
                      <td className="p-3">
                        <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold text-[10px]">
                          {l.enquiryStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="p-4 bg-[#F4F1EA] rounded-2xl text-xs text-gray-600">
            <span className="font-bold text-[#102C46] block mb-1">Google Apps Script Integration Note:</span>
            In production, this frontend submits validated leads via POST request to your deployed Google Apps Script Web App URL connected to your GIS Google Sheet.
          </div>
        </div>
      </div>
    </div>
  );
};

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-8 space-y-6">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#102C46] cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D5A64B] bg-[#D5A64B]/10 px-3 py-1 rounded-full">
            GIS Legal Compliance
          </span>
          <h2 className="text-2xl font-extrabold text-[#102C46]">
            {type === 'privacy' ? 'Privacy Policy & Notice' : 'Terms and Conditions'}
          </h2>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
            <p>
              Global Institute of Studies (GIS), Nilai respects your personal data privacy in compliance with the Personal Data Protection Act (PDPA) of Malaysia.
            </p>
            <h4 className="font-bold text-[#102C46]">1. Collection of Personal Data</h4>
            <p>
              We collect personal information such as full name, phone number, and email address strictly when submitted via our enquiry or consultation forms for educational advisory and admissions correspondence.
            </p>
            <h4 className="font-bold text-[#102C46]">2. Purpose of Data Usage</h4>
            <p>
              Enquiry data is used solely by GIS admissions personnel to provide programme information, financial assistance guidance, and campus visit arrangements.
            </p>
            <h4 className="font-bold text-[#102C46]">3. Data Security & Retention</h4>
            <p>
              Your information is securely stored and restricted to authorized GIS staff. We do not sell or disclose your personal information to third parties.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
            <p>
              Welcome to the official Global Institute of Studies (GIS), Nilai landing page. By accessing and using this website, you agree to the following terms.
            </p>
            <h4 className="font-bold text-[#102C46]">1. Programme Information & Eligibility</h4>
            <p>
              All programme descriptions, entry requirements (including minimum age 15 and above for applicable courses), and fee structures are subject to verification and official confirmation by GIS prior to final enrollment.
            </p>
            <h4 className="font-bold text-[#102C46]">2. Financial Assistance</h4>
            <p>
              Funding schemes such as PTPTN, PTPK, KWSP, and Baitulmal are subject to the respective external provider’s eligibility criteria and approval terms. GIS provides guidance and application support but does not guarantee funding approval.
            </p>
            <h4 className="font-bold text-[#102C46]">3. Limitation of Liability</h4>
            <p>
              GIS shall not be held liable for any decisions made based solely on preliminary website information prior to official counseling consultation.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button onClick={onClose} className="bg-[#102C46] text-white px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
