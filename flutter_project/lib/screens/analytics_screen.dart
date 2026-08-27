import 'package:flutter/material.dart';
import 'detailed_analytics_screen.dart';

class AnalyticsScreen extends StatelessWidget {
  const AnalyticsScreen({super.key});
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
                const Text('অ্যানালিটিক্স', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                IconButton(icon: const Icon(Icons.bar_chart, color: Color(0xFF082B63)), onPressed: () {}),
              ],
            ),
          ),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(20),
              children: [
                InkWell(
                  onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const DetailedAnalyticsScreen())),
                  child: Container(
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.grey.shade200)),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text('এই মাসের মোট খরচ', style: TextStyle(color: Colors.grey)),
                        const SizedBox(height: 8),
                        const Text('৳১২,৪৫০', style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                        const SizedBox(height: 16),
                        Row(
                          children: [
                            const Icon(Icons.trending_down, color: Colors.green, size: 16),
                            const SizedBox(width: 4),
                            const Text('গত মাসের তুলনায় ১২% কম', style: TextStyle(color: Colors.green, fontSize: 12)),
                          ],
                        )
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                const Text('ক্যাটাগরি অনুযায়ী খরচ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                const SizedBox(height: 16),
                _buildStatItem('ওষুধ', '৳৪,২০০', 0.4, Colors.green),
                const SizedBox(height: 12),
                _buildStatItem('টেস্ট/রিপোর্ট', '৳৪,৫০০', 0.45, Colors.orange),
                const SizedBox(height: 12),
                _buildStatItem('ডাক্তার ফি', '৳১,৫০০', 0.15, Colors.blue),
              ],
            ),
          ),
        ],
      ),
    );
  }
  Widget _buildStatItem(String title, String amount, double progress, MaterialColor color) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
            Text(amount, style: const TextStyle(fontWeight: FontWeight.bold, color: Colors.grey)),
          ],
        ),
        const SizedBox(height: 8),
        LinearProgressIndicator(value: progress, backgroundColor: Colors.grey.shade100, valueColor: AlwaysStoppedAnimation(color)),
      ],
    );
  }
}
