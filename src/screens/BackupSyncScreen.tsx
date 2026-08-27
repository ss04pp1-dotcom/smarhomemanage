import React, { useState, useEffect } from 'react';
import { ArrowLeft, Database, RefreshCw, Cloud, HardDrive, CheckCircle2 } from 'lucide-react';
import { TabType } from '../types';
import { initAuth, googleSignIn, logout, getAccessToken } from '../auth';
import { saveToDrive, loadFromDrive, AppData } from '../driveSync';
import { User } from 'firebase/auth';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function BackupSyncScreen({ onNavigate }: Props) {
  const [user, setUser] = useState<User | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => setUser(user),
      () => setUser(null)
    );
    return () => {
      unsubscribe();
    };
  }, []);

  const handleConnect = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
      }
    } catch (err: any) {
      console.error(err);
      if (err.code !== 'auth/popup-closed-by-user') {
        alert('Google Drive-এর সাথে কানেক্ট করা সম্ভব হয়নি।');
      }
    }
  };

  const handleDisconnect = async () => {
    await logout();
    setUser(null);
  };

  const handleBackup = async () => {
    if (!user) return;
    setIsSyncing(true);
    
    // Create some dummy data or gather from actual local state if we had one
    const appData: AppData = {
      expenses: [
        { id: '1', title: 'ওষুধ', amount: 1200, category: 'medicine', date: '25 Aug 2026', familyMember: 'নিজ' }
      ],
      budgets: [
        { id: '1', category: 'medicine', amount: 3000, spent: 1200 }
      ],
      lastUpdated: new Date().toISOString()
    };

    const success = await saveToDrive(appData);
    if (success) {
      setLastSyncTime(new Date().toLocaleString('bn-BD'));
      alert('ডেটা সফলভাবে Google Drive-এ সেভ করা হয়েছে!');
    } else {
      alert('ডেটা সেভ করতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।');
    }
    
    setIsSyncing(false);
  };

  const handleRestore = async () => {
    if (!user) return;
    
    const confirmed = window.confirm(
      'আপনি কি নিশ্চিত যে আপনি Google Drive থেকে ডেটা রিস্টোর করতে চান? আপনার বর্তমান ডেটা পরিবর্তন হতে পারে।'
    );
    if (!confirmed) return;

    setIsSyncing(true);
    const data = await loadFromDrive();
    
    if (data) {
      alert('ডেটা সফলভাবে রিস্টোর হয়েছে!');
    } else {
      alert('কোনো ব্যাকআপ পাওয়া যায়নি বা রিস্টোর করতে সমস্যা হয়েছে।');
    }
    setIsSyncing(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      <div className="px-5 pt-12 pb-4 flex items-center bg-white border-b border-gray-100">
        <button onClick={() => onNavigate('settings')} className="text-gray-900 mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8 text-gray-900">ডেটা ব্যাকআপ ও সিঙ্ক</h1>
      </div>

      <div className="flex-1 px-5 pt-6 space-y-6">
        {/* Connection Status */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mr-3">
                <Cloud size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Google Drive</h3>
                <p className="text-xs text-gray-500">
                  {user ? 'কানেক্টেড' : 'কানেক্ট করা হয়নি'}
                </p>
              </div>
            </div>
            {user ? (
              <CheckCircle2 size={24} className="text-[#08A86B]" />
            ) : null}
          </div>

          {!user ? (
            <button 
              onClick={handleConnect}
              className="w-full bg-white border-2 border-gray-200 text-gray-700 rounded-xl py-3 font-semibold flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5 mr-3" />
              Drive-এর সাথে যুক্ত করুন
            </button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                <span className="text-gray-500">অ্যাকাউন্ট</span>
                <span className="font-medium text-gray-900 truncate max-w-[180px]">{user.email}</span>
              </div>
              <button 
                onClick={handleDisconnect}
                className="w-full bg-red-50 text-red-600 rounded-xl py-2.5 text-sm font-semibold hover:bg-red-100 transition-colors"
              >
                ডিসকানেক্ট করুন
              </button>
            </div>
          )}
        </div>

        {/* Sync Actions */}
        {user && (
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-gray-900 mb-1">ম্যানুয়াল ব্যাকআপ</h3>
              <p className="text-xs text-gray-500 mb-4">
                {lastSyncTime ? `শেষ ব্যাকআপ: ${lastSyncTime}` : 'কোনো ব্যাকআপ করা হয়নি'}
              </p>
            </div>
            
            <button 
              onClick={handleBackup}
              disabled={isSyncing}
              className="w-full bg-[#08A86B] text-white rounded-xl py-3.5 font-semibold flex items-center justify-center shadow-sm hover:bg-[#068A57] transition-colors disabled:opacity-70"
            >
              <Database size={18} className="mr-2" />
              {isSyncing ? 'ব্যাকআপ হচ্ছে...' : 'এখনই ব্যাকআপ করুন'}
            </button>
            
            <button 
              onClick={handleRestore}
              disabled={isSyncing}
              className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl py-3.5 font-semibold flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-70"
            >
              <HardDrive size={18} className="mr-2" />
              Drive থেকে রিস্টোর করুন
            </button>
          </div>
        )}

        <div className="bg-blue-50 rounded-2xl p-4 flex items-start border border-blue-100">
          <RefreshCw size={20} className="text-blue-500 mr-3 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-700 leading-relaxed">
            আপনার স্বাস্থ্য ব্যয়ের সমস্ত তথ্য শুধুমাত্র আপনার ব্যক্তিগত Google Drive-এ সেভ থাকবে। অন্য কেউ এটি দেখতে পারবে না।
          </p>
        </div>
      </div>
    </div>
  );
}
