import React, { useState } from 'react';
import { ArrowLeft, Search as SearchIcon, X, Clock, Filter, Pill, Stethoscope, TestTube } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function SearchScreen({ onNavigate }: Props) {
  const [query, setQuery] = useState('');

  const recentSearches = ['প্যারাসিটামল', 'ডাক্তার ফি', 'ব্লাড টেস্ট', 'হাসপাতাল'];
  
  const dummyResults = query.length > 0 ? [
    { id: 1, title: 'নাপা এক্সট্রা', category: 'ওষুধ', amount: 120, date: '25 Aug', icon: Pill, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 2, title: 'ডাক্তার রফিক (ভিজিট)', category: 'ডাক্তার ফি', amount: 1000, date: '20 Aug', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-50' },
  ] : [];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* Search Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="flex items-center mb-4">
          <button onClick={() => onNavigate('history')} className="text-gray-900 mr-4">
            <ArrowLeft size={24} />
          </button>
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="খরচ খুঁজুন (যেমন: ওষুধ, নাম...)"
              className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
            {query.length > 0 && (
              <button 
                onClick={() => setQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button className="ml-3 w-11 h-11 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100">
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {query.length === 0 ? (
          <div className="px-5 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">সাম্প্রতিক খোঁজ</h3>
              <button className="text-sm text-[#08A86B] font-medium">মুছে ফেলুন</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((item, index) => (
                <button 
                  key={index}
                  onClick={() => setQuery(item)}
                  className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Clock size={14} className="mr-2 text-gray-400" />
                  {item}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-5 pt-6 space-y-4">
            <h3 className="font-bold text-gray-900 mb-2">ফলাফল ({dummyResults.length})</h3>
            
            {dummyResults.length > 0 ? (
              dummyResults.map((result) => (
                <button 
                  key={result.id} 
                  onClick={() => onNavigate('edit-expense')}
                  className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center active:scale-[0.98] transition-transform text-left"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 ${result.bg} ${result.color}`}>
                    <result.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-0.5 truncate">{result.title}</h4>
                    <p className="text-xs text-gray-500 truncate">{result.category}</p>
                  </div>
                  <div className="text-right flex flex-col items-end shrink-0">
                    <span className="font-bold text-[#08A86B] mb-0.5">৳{result.amount}</span>
                    <div className="text-xs text-gray-400">{result.date}</div>
                  </div>
                </button>
              ))
            ) : (
              <div className="text-center pt-12 pb-8">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon size={24} className="text-gray-400" />
                </div>
                <h3 className="text-gray-900 font-bold mb-1">কোনো ফলাফল পাওয়া যায়নি</h3>
                <p className="text-gray-500 text-sm">ভিন্ন কোনো শব্দ দিয়ে চেষ্টা করুন</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
