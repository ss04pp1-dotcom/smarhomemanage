import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';

class FamilyMembersScreen extends StatelessWidget {
  const FamilyMembersScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        iconTheme: const IconThemeData(color: Colors.black),
        title: const Text('পরিবারের সদস্য', style: TextStyle(color: Colors.black, fontSize: 18, fontWeight: FontWeight.bold)),
        actions: [
          IconButton(icon: const Icon(LucideIcons.userPlus), onPressed: () {})
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildMember('নিজ (আমি)', 'প্রোফাইল', '৳৪,২০০', Colors.blue, true),
          const SizedBox(height: 12),
          _buildMember('মা', 'মাতা', '৳২,৮০০', Colors.green, false),
          const SizedBox(height: 12),
          _buildMember('বাবা', 'পিতা', '৳১,৪৫০', Colors.purple, false),
        ],
      ),
    );
  }
  Widget _buildMember(String name, String relation, String spent, MaterialColor color, bool isPrimary) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
      child: Row(
        children: [
          CircleAvatar(backgroundColor: color.shade50, child: Text(name[0], style: TextStyle(color: color.shade700, fontWeight: FontWeight.bold))),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
                    if (isPrimary) ...[
                      const SizedBox(width: 8),
                      Container(padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2), decoration: BoxDecoration(color: Colors.green.shade50, borderRadius: BorderRadius.circular(8)), child: const Text('প্রাথমিক', style: TextStyle(fontSize: 10, color: Colors.green)))
                    ]
                  ],
                ),
                Text(relation, style: const TextStyle(color: Colors.grey, fontSize: 12)),
              ],
            ),
          ),
          Text(spent, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87)),
        ],
      ),
    );
  }
}
