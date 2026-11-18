import React, { useState, useEffect } from 'react';
import { LeadSubmission, LeadStatus } from '../types';
import { 
  Users, UserCheck, Clock, CheckCircle2, Search, Filter, Download, LogOut, 
  Eye, FileText, Phone, Mail, Building2, ShieldAlert, ArrowLeft, Calendar, Edit3, X, Save
} from 'lucide-react';

interface CRMDashboardProps {
  onLogout: () => void;
}

export const CRMDashboard: React.FC<CRMDashboardProps> = ({ onLogout }) => {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [programmeFilter, setProgrammeFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);
  const [internalNotesEdit, setInternalNotesEdit] = useState('');

  // Load leads from localStorage on mount
  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    const str = localStorage.getItem('gis_leads');
    if (str) {
      try {
        const parsed: LeadSubmission[] = JSON.parse(str);
        // Normalize statuses if old format
        const normalized = parsed.map(l => ({
          ...l,
          enquiryStatus: (l.enquiryStatus === 'New' ? 'New Enquiry' : l.enquiryStatus) as LeadStatus
        }));
        setLeads(normalized);
      } catch (e) {
        console.error('Failed to parse leads', e);
      }
    } else {
      // Seed initial demo lead if empty
      const demoLeads: LeadSubmission[] = [
        {
          id: 'lead-demo-1',
          submittedAt: new Date().toLocaleString(),
          fullName: 'Ahmad bin Zulkifli (Student: Hafiz)',
          parentName: 'Puan Noraini',
          phoneNumber: '012-345 6789',
          emailAddress: 'noraini.parent@email.com',
          programmeInterest: 'Automotive Technology',
          financialAidPreference: 'PTPK',
          enquirySource: 'GIS Landing Page',
          enquiryStatus: 'New Enquiry',
          remarks: 'Interested in SKM Automotive. Wants hostel info.',
          internalNotes: 'Called on Monday. Parents visiting campus this Saturday.'
        },
        {
          id: 'lead-demo-2',
          submittedAt: new Date(Date.now() - 86400000).toLocaleString(),
          fullName: 'Siti Sarah binti Mokhtar',
          parentName: 'En. Mokhtar',
          phoneNumber: '019-876 5432',
          emailAddress: 'mokhtar@email.com',
          programmeInterest: 'Culinary Arts and Hospitality',
          financialAidPreference: 'PTPTN',
          enquirySource: 'Counselling Modal',
          enquiryStatus: 'Campus Tour Scheduled',
          remarks: 'Daughter finished PT3 last year.',
          internalNotes: 'Campus tour confirmed for 10:00 AM.'
        }
      ];
      localStorage.setItem('gis_leads', JSON.stringify(demoLeads));
      setLeads(demoLeads);
    }
  };

  const updateLeadStatus = (id: string, newStatus: LeadStatus) => {
    const updated = leads.map(l => l.id === id ? { ...l, enquiryStatus: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('gis_leads', JSON.stringify(updated));
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead({ ...selectedLead, enquiryStatus: newStatus });
    }
  };

  const saveInternalNotes = (id: string, notes: string) => {
    const updated = leads.map(l => l.id === id ? { ...l, internalNotes: notes } : l);
    setLeads(updated);
    localStorage.setItem('gis_leads', JSON.stringify(updated));
    if (selectedLead) {
      setSelectedLead({ ...selectedLead, internalNotes: notes });
    }
    alert('Internal notes saved successfully.');
  };

  const exportCSV = () => {
    const headers = ['ID', 'Submitted At', 'Student/Parent Name', 'Parent Name', 'Phone Number', 'Email', 'Programme', 'Financial Aid', 'Source', 'Status', 'Remarks', 'Internal Notes'];
    const rows = leads.map(l => [
      l.id,
      `"${l.submittedAt}"`,
      `"${l.fullName}"`,
      `"${l.parentName || '-'}"`,
      `"${l.phoneNumber}"`,
      `"${l.emailAddress}"`,
      `"${l.programmeInterest || '-'}"`,
      `"${l.financialAidPreference || '-'}"`,
      `"${l.enquirySource}"`,
      `"${l.enquiryStatus}"`,
      `"${l.remarks || '-'}"`,
      `"${l.internalNotes || '-'}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `gis_nilai_crm_leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Metrics calculation
  const totalLeads = leads.length;
  const newToday = leads.filter(l => l.submittedAt.includes(new Date().toLocaleDateString())).length;
  const pendingFollowups = leads.filter(l => l.enquiryStatus === 'New Enquiry' || l.enquiryStatus === 'Contacted').length;
  const enrolledCount = leads.filter(l => l.enquiryStatus === 'Enrolled').length;
  const conversionRate = totalLeads > 0 ? ((enrolledCount / totalLeads) * 100).toFixed(1) : '0.0';

  // Filter leads
  const filteredLeads = leads.filter(l => {
    const matchesSearch = l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.phoneNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.emailAddress.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || l.enquiryStatus === statusFilter;
    const matchesProg = programmeFilter === 'All' || l.programmeInterest?.includes(programmeFilter);
    return matchesSearch && matchesStatus && matchesProg;
  });

  const statusColors: Record<LeadStatus, string> = {
    'New Enquiry': 'bg-blue-100 text-blue-800 border-blue-200',
    'Contacted': 'bg-amber-100 text-amber-800 border-amber-200',
    'Campus Tour Scheduled': 'bg-purple-100 text-purple-800 border-purple-200',
    'Enrolled': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'Closed': 'bg-gray-100 text-gray-700 border-gray-200',
    'New': 'bg-blue-100 text-blue-800 border-blue-200',
    'Follow-up': 'bg-amber-100 text-amber-800 border-amber-200',
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#263442]">
      
      {/* CRM Header */}
      <header className="bg-[#102C46] text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#D5A64B] flex items-center justify-center text-[#102C46] font-extrabold text-lg">
              CRM
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">GIS Nilai Admissions CRM</h1>
              <p className="text-xs text-[#D5A64B]">Staff Portal & Lead Management</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#D5A64B]" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onLogout}
              className="bg-red-500/20 hover:bg-red-500/30 text-red-200 px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-red-500/30"
            >
              <LogOut className="w-4 h-4" />
              <span>Staff Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Enquiries</span>
              <h3 className="text-2xl font-extrabold text-[#102C46]">{totalLeads}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">New Today</span>
              <h3 className="text-2xl font-extrabold text-[#102C46]">{newToday}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pending Follow-ups</span>
              <h3 className="text-2xl font-extrabold text-[#102C46]">{pendingFollowups}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Enrolled Rate</span>
              <h3 className="text-2xl font-extrabold text-[#102C46]">{conversionRate}%</h3>
            </div>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, phone or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46] bg-gray-50/50"
              />
            </div>

            {/* Status Filter Chips */}
            <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
              <span className="text-xs font-bold text-gray-500 mr-2">Status:</span>
              {['All', 'New Enquiry', 'Contacted', 'Campus Tour Scheduled', 'Enrolled', 'Closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    statusFilter === status
                      ? 'bg-[#102C46] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Lead Management Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-lg text-[#102C46]">Prospective Student Enquiries ({filteredLeads.length})</h3>
            <span className="text-xs text-gray-500">Auto-synced with landing page enquiries</span>
          </div>

          {filteredLeads.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 font-medium">No leads match your search or filter criteria.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 uppercase tracking-wider font-semibold border-b border-gray-200">
                    <th className="p-4">Timestamp</th>
                    <th className="p-4">Student / Visitor Name</th>
                    <th className="p-4">Phone Number</th>
                    <th className="p-4">Selected Programme</th>
                    <th className="p-4">Funding Pref.</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="p-4 text-gray-500 whitespace-nowrap">{lead.submittedAt}</td>
                      <td className="p-4">
                        <span className="font-bold text-[#102C46] block">{lead.fullName}</span>
                        <span className="text-[11px] text-gray-500">{lead.emailAddress}</span>
                      </td>
                      <td className="p-4 text-gray-700 whitespace-nowrap font-medium">{lead.phoneNumber}</td>
                      <td className="p-4 text-gray-800 font-medium">{lead.programmeInterest || 'General Enquiry'}</td>
                      <td className="p-4 text-gray-600">{lead.financialAidPreference || '-'}</td>
                      <td className="p-4">
                        <select
                          value={lead.enquiryStatus}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                          className={`px-3 py-1.5 rounded-xl font-semibold text-xs border cursor-pointer focus:outline-none ${statusColors[lead.enquiryStatus] || 'bg-gray-100 text-gray-800'}`}
                        >
                          <option value="New Enquiry">New Enquiry</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Campus Tour Scheduled">Campus Tour Scheduled</option>
                          <option value="Enrolled">Enrolled</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="p-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => {
                            setSelectedLead(lead);
                            setInternalNotesEdit(lead.internalNotes || '');
                          }}
                          className="bg-[#102C46]/10 hover:bg-[#102C46] hover:text-white text-[#102C46] p-2 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
                          title="View Lead Details & Notes"
                        >
                          <Eye className="w-4 h-4" />
                          <span>Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Lead Details Modal / Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-8 space-y-6">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[#102C46] hover:bg-gray-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#547A70] bg-[#547A70]/10 px-3 py-1 rounded-full">
                Enquiry Details & Follow-up
              </span>
              <h2 className="text-2xl font-extrabold text-[#102C46]">{selectedLead.fullName}</h2>
              <p className="text-xs text-gray-500">Submitted on {selectedLead.submittedAt} via {selectedLead.enquirySource}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200 text-xs">
              <div>
                <span className="font-semibold text-gray-500 block">Phone Number:</span>
                <span className="font-bold text-[#102C46] text-sm">{selectedLead.phoneNumber}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500 block">Email Address:</span>
                <span className="font-bold text-[#102C46] text-sm">{selectedLead.emailAddress}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500 block">Programme Interest:</span>
                <span className="font-bold text-[#102C46]">{selectedLead.programmeInterest || 'General'}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-500 block">Financial Aid Preference:</span>
                <span className="font-bold text-[#102C46]">{selectedLead.financialAidPreference || 'None specified'}</span>
              </div>
            </div>

            {selectedLead.remarks && (
              <div className="space-y-1 bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-xs">
                <span className="font-bold text-amber-900 block">Visitor Remarks / Message:</span>
                <p className="text-amber-950">{selectedLead.remarks}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#102C46]">
                Internal Staff Notes & Follow-up Remarks
              </label>
              <textarea
                rows={4}
                value={internalNotesEdit}
                onChange={(e) => setInternalNotesEdit(e.target.value)}
                placeholder="Add confidential admissions notes, call logs, or scheduled follow-ups..."
                className="w-full p-4 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#102C46] resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600">Status:</span>
                <select
                  value={selectedLead.enquiryStatus}
                  onChange={(e) => updateLeadStatus(selectedLead.id, e.target.value as LeadStatus)}
                  className={`px-3 py-1.5 rounded-xl font-semibold text-xs border cursor-pointer ${statusColors[selectedLead.enquiryStatus]}`}
                >
                  <option value="New Enquiry">New Enquiry</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Campus Tour Scheduled">Campus Tour Scheduled</option>
                  <option value="Enrolled">Enrolled</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => saveInternalNotes(selectedLead.id, internalNotesEdit)}
                  className="bg-[#102C46] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 hover:bg-[#1a3d5e] cursor-pointer shadow-sm"
                >
                  <Save className="w-4 h-4 text-[#D5A64B]" />
                  <span>Save Notes</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
