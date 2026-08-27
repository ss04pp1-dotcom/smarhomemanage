import 'package:flutter/material.dart';

class FullReportPreviewScreen extends StatelessWidget {
  const FullReportPreviewScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        title: const Text('রিপোর্ট প্রিভিউ', style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
        actions: [
          IconButton(icon: const Icon(Icons.download), onPressed: () {}),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Container(
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: Colors.grey.withOpacity(0.1), blurRadius: 10, offset: const Offset(0, 4))]),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(child: Text('মাসিক রিপোর্ট - আগস্ট ২০২৬', style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63)))),
              const SizedBox(height: 24),
              _buildRow('মোট খরচ:', '৳১২,৪৫০'),
              const Divider(height: 32),
              const Text('ক্যাটাগরি অনুযায়ী:', style: TextStyle(fontWeight: FontWeight.bold)),
              const SizedBox(height: 12),
              _buildRow('ওষুধ:', '৳৪,২০০'),
              _buildRow('টেস্ট/রিপোর্ট:', '৳৪,৫০০'),
              _buildRow('ডাক্তার ফি:', '৳১,৫০০'),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton.icon(
                  onPressed: () {},
                  icon: const Icon(Icons.share, color: Colors.white),
                  label: const Text('PDF হিসেবে শেয়ার করুন', style: TextStyle(color: Colors.white)),
                  style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF08A86B), padding: const EdgeInsets.symmetric(vertical: 16), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
  Widget _buildRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(label, style: const TextStyle(color: Colors.grey)),
          Text(value, style: const TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }
}
