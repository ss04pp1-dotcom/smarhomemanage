import React from 'react';
import { ArrowLeft, Settings, Share2, Download, Printer } from 'lucide-react';
import { TabType } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function FullReportPreviewScreen({ onNavigate }: Props) {
  const pieData = [
    { name: 'ওষুধ', value: 40, color: '#08A86B' },
    { name: 'ডাক্তার ফি', value: 15, color: '#3B82F6' },
    { name: 'পরীক্ষা-নিরীক্ষা', value: 12, color: '#F59E0B' },
    { name: 'হাসপাতাল', value: 25, color: '#10B981' },
    { name: 'অন্যান্য', value: 8, color: '#F97316' },
  ];
  
  const lineData = [
    { name: 'ফেব', value: 4800 },
    { name: 'মার্চ', value: 4500 },
    { name: 'এপ্রি', value: 6500 },
    { name: 'মে', value: 5500 },
    { name: 'জুন', value: 7500 },
    { name: 'জুল', value: 8450 },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-[#F7F9FC]">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('report')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-2">রিপোর্ট প্রিভিউ</h1>
        <button className="text-[#082B63]">
          <Settings size={24} />
        </button>
      </div>

      <div className="flex-1 px-5 py-6">
        {/* PDF Document Container */}
        <div className="bg-white w-full rounded-lg shadow-md p-6 border border-gray-200 mb-8 relative">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">স্বাস্থ্য ব্যয় প্রতিবেদন</h2>
            <p className="text-gray-500 text-xs">আগস্ট ২০২৬</p>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-6 text-center bg-gray-50 p-3 rounded-lg border border-gray-100">
            <div>
              <p className="text-[10px] text-gray-500 mb-1">মোট খরচ</p>
              <p className="text-xs font-bold text-gray-900">৳8,450</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 mb-1">বাজেট</p>
              <p className="text-xs font-bold text-gray-900">৳12,000</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 mb-1">বাকি</p>
              <p className="text-xs font-bold text-[#08A86B]">৳3,550</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 mb-1">ব্যবহার</p>
              <p className="text-xs font-bold text-gray-900">70%</p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-6">
             <div className="w-32 h-32 relative mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                      stroke="none"
                      paddingAngle={2}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-full space-y-2">
                {pieData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-[10px]">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-700">{item.name}</span>
                    </div>
                    <div className="text-gray-500">
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-gray-900 mb-2 border-b border-gray-100 pb-1">মাসিক ট্রেন্ড</h3>
            <div className="h-24 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#6B7280' }} dy={5} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 8, fill: '#6B7280' }} tickFormatter={(val) => `${val/1000}k`} />
                  <Line type="monotone" dataKey="value" stroke="#08A86B" strokeWidth={2} dot={{ r: 2, fill: '#08A86B' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white rounded-t-3xl p-5 flex justify-center gap-4 items-center z-30 fixed bottom-0 w-full max-w-md border-t border-gray-100 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
        <button className="flex flex-col items-center justify-center text-gray-500 hover:text-gray-800 transition-colors bg-gray-50 w-16 h-16 rounded-2xl border border-gray-100">
          <Share2 size={20} className="mb-1" />
          <span className="text-[10px] font-medium">শেয়ার</span>
        </button>
        <button className="flex-1 flex flex-row items-center justify-center text-white bg-[#08A86B] hover:bg-[#068A57] transition-colors h-16 rounded-2xl shadow-md shadow-green-500/20 px-4">
          <Download size={20} className="mr-2" />
          <span className="text-sm font-bold">PDF ডাউনলোড</span>
        </button>
        <button className="flex flex-col items-center justify-center text-blue-500 hover:text-blue-700 transition-colors bg-blue-50 w-16 h-16 rounded-2xl border border-blue-100">
          <Printer size={20} className="mb-1" />
          <span className="text-[10px] font-medium">প্রিন্ট</span>
        </button>
      </div>
    </div>
  );
}
