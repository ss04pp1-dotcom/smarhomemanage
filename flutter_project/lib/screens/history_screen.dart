import 'edit_expense_screen.dart';
import 'package:flutter/material.dart';
import 'search_screen.dart';

class HistoryScreen extends StatelessWidget {
  const HistoryScreen({super.key});
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
                const Text('খরচের ইতিহাস', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                IconButton(
                  icon: const Icon(Icons.search, color: Color(0xFF082B63)),
                  onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SearchScreen())),
                ),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(20),
              children: [
                _buildTransactionItem(context, Icons.medical_services, 'নাপা এক্সট্রা', 'ওষুধ', '৳১২০', 'আজ, সকাল ১০:৩০', Colors.green),
                const SizedBox(height: 12),
                _buildTransactionItem(context, Icons.health_and_safety, 'ডাক্তার ফি', 'পরামর্শ', '৳১,০০০', 'গতকাল', Colors.blue),
                const SizedBox(height: 12),
                _buildTransactionItem(context, Icons.show_chart, 'ব্লাড টেস্ট', 'পরীক্ষা', '৳২,৫০০', '২০ আগস্ট', Colors.orange),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTransactionItem(BuildContext context, IconData icon, String title, String subtitle, String amount, String date, MaterialColor color) {
    return InkWell(onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const EditExpenseScreen())), child: Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.shade100),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: color.shade50, shape: BoxShape.circle),
            child: Icon(icon, color: color.shade600, size: 20),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Color(0xFF082B63))),
                Text(subtitle, style: const TextStyle(fontSize: 12, color: Colors.grey)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(amount, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Color(0xFF08A86B))),
              Text(date, style: const TextStyle(fontSize: 12, color: Colors.grey)),
            ],
          ),
        ],
      ),
    ));
  }
}
