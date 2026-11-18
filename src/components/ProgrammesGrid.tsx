import React, { useState } from 'react';
import { PROGRAMMES } from '../data/gisData';
import { Programme } from '../types';
import { Search, Clock, Award, ArrowRight, BookOpen, ShieldAlert } from 'lucide-react';

interface ProgrammesGridProps {
  onSelectProgramme: (programme: Programme) => void;
  onOpenCounselling: () => void;
}

export const ProgrammesGrid: React.FC<ProgrammesGridProps> = ({ onSelectProgramme, onOpenCounselling }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Hospitality & Culinary', 'Engineering & TVET', 'Education & Care', 'Healthcare & Community', 'Business & Operations'];

  const filteredProgrammes = PROGRAMMES.filter((prog) => {
    const matchesCategory = selectedCategory === 'All' || prog.category === selectedCategory;
    const matchesSearch = prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#102C46] bg-[#102C46]/10 px-3 py-1 rounded-full">
            Programmes & Courses
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102C46]">
            Practical Pathways for Teenagers Aged 15 & Above
          </h2>
          <p className="text-base text-[#263442]/80">
            Explore our industry-aligned diploma and certificate programmes designed to equip your child with hands-on skills and real career readiness.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#102C46] text-white shadow-md'
                    : 'bg-[#F4F1EA] text-[#263442] hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search programmes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#102C46] bg-[#F4F1EA]/50"
            />
          </div>

        </div>

        {/* Programmes Grid */}
        {filteredProgrammes.length === 0 ? (
          <div className="text-center py-16 bg-[#F4F1EA] rounded-3xl">
            <p className="text-gray-600 font-medium">No programmes found matching your search.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-bold text-[#102C46] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProgrammes.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#102C46]/90 backdrop-blur-xs text-[#D5A64B] font-semibold text-xs px-3 py-1 rounded-lg">
                      {prog.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs font-semibold text-[#547A70]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {prog.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" /> {prog.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#102C46] group-hover:text-[#D5A64B] transition-colors">
                      {prog.title}
                    </h3>

                    <p className="text-sm text-[#263442]/75 line-clamp-2 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProgramme(prog)}
                    className="text-sm font-bold text-[#102C46] group-hover:text-[#D5A64B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More & Requirements</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={onOpenCounselling}
                    className="bg-[#102C46]/10 hover:bg-[#102C46] hover:text-white text-[#102C46] px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Critical Content Notice */}
        <div className="mt-12 bg-[#F4F1EA] rounded-2xl p-6 border border-gray-200 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#D5A64B] shrink-0 mt-0.5" />
          <div className="text-xs text-[#263442]/80 space-y-1">
            <span className="font-bold text-[#102C46] block text-sm">Important Notice on Programme Availability</span>
            <p>
              The categories and courses listed above represent our core pathway offerings. Before final enrollment, GIS verifies exact active programme availability, official qualification levels, accreditation status, duration, and specific entry requirements with parents.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
