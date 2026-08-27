import 'package:flutter/material.dart';

class DetailedAnalyticsScreen extends StatelessWidget {
  const DetailedAnalyticsScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        title: const Text('বিস্তারিত অ্যানালিটিক্স', style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
            child: Column(
              children: [
                const Icon(Icons.bar_chart, size: 64, color: Color(0xFF08A86B)),
                const SizedBox(height: 16),
                const Text('গ্রাফিকাল ভিউ শীঘ্রই আসছে', style: TextStyle(color: Colors.grey)),
              ],
            ),
          ),
          const SizedBox(height: 24),
          const Text('মাসিক তুলনা', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
          const SizedBox(height: 16),
          _buildMonthCompare('আগস্ট ২০২৬', '৳১২,৪৫০', true),
          _buildMonthCompare('জুলাই ২০২৬', '৳১৪,২০০', false),
          _buildMonthCompare('জুন ২০২৬', '৳১০,৫০০', false),
        ],
      ),
    );
  }
  Widget _buildMonthCompare(String month, String amount, bool isCurrent) {
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: isCurrent ? const Color(0xFF08A86B) : Colors.grey.shade200)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(month, style: TextStyle(fontWeight: isCurrent ? FontWeight.bold : FontWeight.normal)),
          Text(amount, style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }
}
