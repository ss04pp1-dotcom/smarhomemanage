import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'full_report_preview_screen.dart';

class ReportScreen extends StatelessWidget {
  const ReportScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('রিপোর্ট', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                IconButton(icon: const Icon(LucideIcons.download, color: Color(0xFF082B63)), onPressed: () {}),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(20),
              children: [
                _buildReportItem(context, 'মাসিক রিপোর্ট (আগস্ট)', '১ আগস্ট - ৩১ আগস্ট'),
                const SizedBox(height: 12),
                _buildReportItem(context, 'পারিবারিক খরচ রিপোর্ট', 'সকল সদস্যের রিপোর্ট'),
                const SizedBox(height: 12),
                _buildReportItem(context, 'বার্ষিক রিপোর্ট (২০২৬)', 'জানুয়ারি - ডিসেম্বর'),
              ],
            ),
          ),
        ],
      ),
    );
  }
  Widget _buildReportItem(BuildContext context, String title, String subtitle) {
    return InkWell(
      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const FullReportPreviewScreen())),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
        child: Row(
          children: [
            Container(padding: const EdgeInsets.all(12), decoration: BoxDecoration(color: Colors.blue.shade50, shape: BoxShape.circle), child: const Icon(LucideIcons.fileText, color: Colors.blue)),
            const SizedBox(width: 16),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                  Text(subtitle, style: const TextStyle(color: Colors.grey, fontSize: 12)),
                ],
              ),
            ),
            const Icon(LucideIcons.chevronRight, color: Colors.grey)
          ],
        ),
      ),
    );
  }
}
