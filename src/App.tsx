import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Commitments } from './components/Commitments';
import { AcademicSupport } from './components/AcademicSupport';
import { FinancialAssistance } from './components/FinancialAssistance';
import { StudentWelfare } from './components/StudentWelfare';
import { CareerPathways } from './components/CareerPathways';
import { ProgrammesGrid } from './components/ProgrammesGrid';
import { WhyGIS } from './components/WhyGIS';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { EnquiryForm } from './components/EnquiryForm';
import { Footer } from './components/Footer';
import { ProgrammeModal, VirtualTourModal, CounsellingModal, LegalModal } from './components/Modals';
import { AdminLogin } from './components/AdminLogin';
import { CRMDashboard } from './components/CRMDashboard';
import { Programme, LeadSubmission, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from './types';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [counsellingOpen, setCounsellingOpen] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem('gis_admin_auth') === 'true';
  });
  const [showCrmDashboard, setShowCrmDashboard] = useState<boolean>(() => {
    return sessionStorage.getItem('gis_admin_auth') === 'true';
  });

  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleLeadSubmitted = (lead: LeadSubmission) => {
    setToastMessage(`Enquiry recorded for ${lead.fullName}! WhatsApp chat launched.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setShowCrmDashboard(true);
    setToastMessage('Successfully logged into GIS Staff CRM Dashboard.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('gis_admin_auth');
    setIsAdminLoggedIn(false);
    setShowCrmDashboard(false);
    setToastMessage('Logged out of staff portal.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent("Hi, I am interested in GIS Nilai offerings and would like to speak with a counsellor.");

  // If CRM Dashboard is active, render CRM View
  if (showCrmDashboard && isAdminLoggedIn) {
    return (
      <>
        {toastMessage && (
          <div className="fixed bottom-6 left-6 z-50 bg-[#102C46] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#D5A64B]/40 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </div>
        )}
        <CRMDashboard onLogout={handleLogout} />
        <AdminLogin
          isOpen={adminLoginOpen}
          onClose={() => setAdminLoginOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#263442] font-['Inter',sans-serif] selection:bg-[#D5A64B]/30 relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#102C46] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#D5A64B]/40 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Floating WhatsApp Quick Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 group"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp: ${WHATSAPP_DISPLAY}`}
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-bold pl-0 group-hover:pl-2">
          WhatsApp Us
        </span>
      </a>

      {/* Header */}
      <Header
        onOpenCounselling={() => setCounsellingOpen(true)}
        onOpenVirtualTour={() => setVirtualTourOpen(true)}
        onOpenAdminLogin={() => setAdminLoginOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onOpenAdminDashboard={() => setShowCrmDashboard(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenCounselling={() => setCounsellingOpen(true)}
          onOpenVirtualTour={() => setVirtualTourOpen(true)}
        />
        <Commitments />
        <AcademicSupport />
        <FinancialAssistance onOpenCounselling={() => setCounsellingOpen(true)} />
        <StudentWelfare />
        <CareerPathways />
        <ProgrammesGrid
          onSelectProgramme={(prog) => setSelectedProgramme(prog)}
          onOpenCounselling={() => setCounsellingOpen(true)}
        />
        <WhyGIS />
        <Testimonials />
        <FAQ />
        <EnquiryForm onLeadSubmitted={handleLeadSubmitted} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModal('privacy')}
        onOpenTerms={() => setLegalModal('terms')}
        onOpenAdminLogin={() => setAdminLoginOpen(true)}
      />

      {/* Modals */}
      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onOpenCounselling={() => setCounsellingOpen(true)}
      />

      <VirtualTourModal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
      />

      <CounsellingModal
        isOpen={counsellingOpen}
        onClose={() => setCounsellingOpen(false)}
        onLeadSubmitted={handleLeadSubmitted}
      />

      <AdminLogin
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {legalModal && (
        <LegalModal
          isOpen={!!legalModal}
          onClose={() => setLegalModal(null)}
          type={legalModal}
        />
      )}

    </div>
  );
}
