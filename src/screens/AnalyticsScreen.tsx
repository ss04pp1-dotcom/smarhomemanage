import React, { useState } from 'react';
import { ArrowLeft, Settings, Lightbulb } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from 'recharts';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function AnalyticsScreen({ onNavigate }: Props) {
  const [activeSegment, setActiveSegment] = useState<'monthly' | 'yearly' | 'custom'>('monthly');

  const lineData = [
    { name: 'জানু', value: 2000 },
    { name: 'ফেব', value: 4800 },
    { name: 'মার্চ', value: 4500 },
    { name: 'এপ্রি', value: 6500 },
    { name: 'মে', value: 5500 },
    { name: 'জুন', value: 7500 },
    { name: 'জুল', value: 8450 },
  ];

  const pieData = [
    { name: 'ওষুধ', value: 40, amount: '৳৩,৩৮০', color: '#08A86B' },
    { name: 'ডাক্তার ফি', value: 15, amount: '৳১,২৬৮', color: '#3B82F6' },
    { name: 'পরীক্ষা-নিরীক্ষা', value: 12, amount: '৳১,০১৪', color: '#F59E0B' },
    { name: 'হাসপাতাল', value: 25, amount: '৳২,১১৩', color: '#10B981' },
    { name: 'অন্যান্য', value: 8, amount: '৳৬৭৬', color: '#F97316' },
  ];

  // Custom label for the latest point in line chart
  const CustomizedDot = (props: any) => {
    const { cx, cy, index, payload } = props;
    if (index === lineData.length - 1) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={5} fill="#08A86B" stroke="white" strokeWidth={2} />
          <rect x={cx - 30} y={cy - 35} width={60} height={24} fill="#08A86B" rx={4} />
          <text x={cx} y={cy - 18} fill="white" textAnchor="middle" fontSize="12" fontWeight="bold">
            ৳8,450
          </text>
        </g>
      );
    }
    return <circle cx={cx} cy={cy} r={4} fill="#08A86B" />;
  };

  return (
    <div className="flex flex-col min-h-full pb-8 bg-[#F7F9FC]">
      {/* Header Area */}
      <div className="bg-gradient-to-br from-[#082B63] to-[#0A5C66] pt-12 pb-16 px-5 rounded-b-[2.5rem] relative">
        <div className="flex justify-between items-center text-white mb-2">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">বিশ্লেষণ</h1>
          <button onClick={() => onNavigate('settings')}>
            <Settings size={24} />
          </button>
        </div>
      </div>

      <div className="px-5 -mt-8 relative z-10 space-y-6">
        
        {/* Segmented Control inside a card */}
        <div className="bg-white rounded-2xl p-1.5 flex shadow-sm border border-gray-100">
          <button 
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all",
              activeSegment === 'monthly' ? "bg-[#E5F6EE] text-[#08A86B] shadow-sm" : "text-gray-500"
            )}
            onClick={() => setActiveSegment('monthly')}
          >
            মাসিক
          </button>
          <button 
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all",
              activeSegment === 'yearly' ? "bg-[#E5F6EE] text-[#08A86B] shadow-sm" : "text-gray-500"
            )}
            onClick={() => setActiveSegment('yearly')}
          >
            বার্ষিক
          </button>
          <button 
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all",
              activeSegment === 'custom' ? "bg-[#E5F6EE] text-[#08A86B] shadow-sm" : "text-gray-500"
            )}
            onClick={() => setActiveSegment('custom')}
          >
            কাস্টম
          </button>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 font-bold mb-6">মাসিক খরচের গ্রাফ</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6B7280' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6B7280' }} 
                  tickFormatter={(val) => val === 0 ? '0' : `${val / 1000}k`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#08A86B" 
                  strokeWidth={3} 
                  dot={<CustomizedDot />}
                  activeDot={{ r: 6, fill: '#08A86B', stroke: 'white', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 font-bold mb-4">খরচের বিভাগভিত্তিক বিশ্লেষণ</h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="w-40 h-40 relative mb-4 sm:mb-0 shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
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
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-gray-900 leading-tight">৳8,450</span>
                <span className="text-gray-500 text-[10px]">মোট খরচ</span>
              </div>
            </div>
            
            <div className="flex-1 w-full sm:pl-6 space-y-3">
              {pieData.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => onNavigate('detailed-analytics')}
                  className="w-full flex justify-between items-center text-sm py-1 active:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-700 text-xs">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-900 text-xs mr-2">{item.value}%</span>
                    <span className="text-gray-500 text-[10px]">({item.amount})</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Smart Insight Card */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-4 shadow-sm">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center mr-3 shrink-0">
              <Lightbulb size={18} className="text-[#D97706]" />
            </div>
            <div>
              <h4 className="text-gray-900 font-bold text-sm mb-1">বিশেষ নির্দেশনা</h4>
              <p className="text-gray-700 text-xs leading-relaxed">
                এই মাসে আপনার ওষুধের খরচ গত মাসের তুলনায় ১৮% বেশি। ওষুধের তালিকা রিভিউ করা যেতে পারে।
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
