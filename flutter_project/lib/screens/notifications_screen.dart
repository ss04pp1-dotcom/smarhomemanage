import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class NotificationsScreen extends StatelessWidget {
  const NotificationsScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        title: const Text('নোটিফিকেশন', style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildNotification(LucideIcons.alertTriangle, 'বাজেট সতর্কতা', 'আপনার "টেস্ট/রিপোর্ট" ক্যাটাগরির বাজেট ৯০% অতিক্রম করেছে।', Colors.orange),
          const SizedBox(height: 12),
          _buildNotification(LucideIcons.cloud, 'ডেটা ব্যাকআপ', 'আপনার ডেটা সফলভাবে Google Drive-এ সিঙ্ক হয়েছে।', Colors.blue),
          const SizedBox(height: 12),
          _buildNotification(LucideIcons.checkCircle, 'নতুন খরচ যোগ', '৳১২০ (নাপা এক্সট্রা) সফলভাবে যোগ করা হয়েছে।', Colors.green),
        ],
      ),
    );
  }
  Widget _buildNotification(IconData icon, String title, String desc, MaterialColor color) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 24),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                const SizedBox(height: 4),
                Text(desc, style: const TextStyle(color: Colors.grey, fontSize: 13)),
              ],
            ),
          )
        ],
      ),
    );
  }
}
