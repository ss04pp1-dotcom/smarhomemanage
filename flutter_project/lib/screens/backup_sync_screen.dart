import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class BackupSyncScreen extends StatelessWidget {
  const BackupSyncScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        title: const Text('ডেটা ব্যাকআপ ও সিঙ্ক', style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
              child: Column(
                children: [
                  Row(
                    children: [
                      const Icon(LucideIcons.cloud, color: Colors.blue, size: 32),
                      const SizedBox(width: 16),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text('Google Drive', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                          Text('কানেক্ট করা হয়নি', style: TextStyle(color: Colors.grey, fontSize: 12)),
                        ],
                      )
                    ],
                  ),
                  const SizedBox(height: 20),
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton(
                      onPressed: () {
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Drive-এ সফলভাবে ব্যাকআপ নেওয়া হয়েছে!')));
                      },
                      style: OutlinedButton.styleFrom(padding: const EdgeInsets.symmetric(vertical: 12), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
                      child: const Text('Drive-এর সাথে যুক্ত করুন', style: TextStyle(color: Colors.black)),
                    ),
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
