export interface Programme {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  fullDescription: string;
  careerProspects: string[];
  entryRequirements: string;
  image: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
}

export type LeadStatus = 'New Enquiry' | 'Contacted' | 'Campus Tour Scheduled' | 'Enrolled' | 'Closed' | 'New' | 'Follow-up';

export interface LeadSubmission {
  id: string;
  submittedAt: string;
  fullName: string; // Student or Parent Name
  parentName?: string; // Guardian / Parent Name
  phoneNumber: string;
  emailAddress: string;
  programmeInterest?: string;
  financialAidPreference?: string; // PTPTN, PTPK, KWSP, Baitulmal, Self-Funded
  enquirySource: string;
  enquiryStatus: LeadStatus;
  remarks?: string;
  internalNotes?: string;
}

export const WHATSAPP_NUMBER = '601165355635';
export const WHATSAPP_DISPLAY = '+60 11-6535 5635';
export const GIS_ADDRESS = 'Global Institute of Studies, Persiaran Universiti, Putra Nilai, 71800 Nilai, Negeri Sembilan, Malaysia';
export const GIS_EMAIL = 'enquiry@gisnilai.edu.my';
