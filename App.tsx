
import React, { useState, useEffect } from 'react';
import { GOAT_REASONS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredReasons, setFilteredReasons] = useState(GOAT_REASONS);

  useEffect(() => {
    const filtered = GOAT_REASONS.filter(reason => 
      reason.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReasons(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header Section */}
      <header className="goat-gradient text-white py-16 px-6 text-center shadow-lg mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            لماذا يجب أن أترك وظيفتي وأصبح راعي ماعز؟
          </h1>
          <p className="text-xl text-slate-300 font-light opacity-90 italic">
            "كتبت خلال أسبوع مناوبتي (On-Call) اللعين"
          </p>
          <div className="mt-8 flex justify-center">
            <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              خالية من أخطاء النظام
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {/* Search Bar */}
        <div className="sticky top-4 z-10 mb-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="ابحث عن سبب مقنع..."
              className="w-full p-4 pr-12 rounded-2xl border-2 border-slate-200 shadow-xl focus:border-emerald-500 focus:ring-0 transition-all outline-none bg-white/90 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-4">
          {filteredReasons.length > 0 ? (
            filteredReasons.map((reason, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-200 transition-all group flex items-start gap-4"
              >
                <div className="bg-slate-100 text-slate-500 font-bold h-8 w-8 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                  {index + 1}
                </div>
                <p className="text-lg leading-relaxed text-slate-700">
                  {reason}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-inner border-2 border-dashed border-slate-200">
              <p className="text-2xl text-slate-400 font-medium">لم نجد هذا السبب، ربما الماعز أكلت الوثيقة!</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-slate-400 text-sm pb-8">
        <p>مترجمة للغة العربية الفصحى بروح تقنية ساخرة.</p>
        <p className="mt-2">لا تدع مديرك يرى هذه القائمة.</p>
      </footer>
    </div>
  );
};

export default App;
