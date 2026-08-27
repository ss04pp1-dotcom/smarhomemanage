import 'package:flutter/material.dart';
import 'detailed_analytics_screen.dart';
import '../widgets/line_chart.dart';
import '../widgets/donut_chart.dart';

class AnalyticsScreen extends StatefulWidget {
  const AnalyticsScreen({super.key});

  @override
  State<AnalyticsScreen> createState() => _AnalyticsScreenState();
}

class _AnalyticsScreenState extends State<AnalyticsScreen> {
  String _activeSegment = 'monthly';

  final List<double> _lineData = [2000, 4800, 4500, 6500, 5500, 7500, 8450];
  final List<String> _labels = ['জানু', 'ফেব', 'মার্চ', 'এপ্রি', 'মে', 'জুন', 'জুল'];

  final List<Map<String, dynamic>> _pieData = [
    {'name': 'ওষুধ', 'value': 40.0, 'amount': '৳৩,৩৮০', 'color': const Color(0xFF08A86B)},
    {'name': 'ডাক্তার ফি', 'value': 15.0, 'amount': '৳১,২৬৮', 'color': const Color(0xFF3B82F6)},
    {'name': 'পরীক্ষা-নিরীক্ষা', 'value': 12.0, 'amount': '৳১,০১৪', 'color': const Color(0xFFF59E0B)},
    {'name': 'হাসপাতাল', 'value': 25.0, 'amount': '৳২,১১৩', 'color': const Color(0xFF10B981)},
    {'name': 'অন্যান্য', 'value': 8.0, 'amount': '৳৬৭৬', 'color': const Color(0xFFF97316)},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Header
            Container(
              width: double.infinity,
              padding: const EdgeInsets.only(top: 48, left: 20, right: 20, bottom: 64),
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF082B63), Color(0xFF0A5C66)],
                ),
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(40),
                  bottomRight: Radius.circular(40),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const SizedBox(width: 24), // Placeholder for back button
                  const Text('বিশ্লেষণ', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
                  IconButton(
                    icon: const Icon(Icons.settings, color: Colors.white),
                    onPressed: () {}, // Navigate to settings
                  ),
                ],
              ),
            ),
            
            Transform.translate(
              offset: const Offset(0, -32),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  children: [
                    // Segmented Control
                    Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: Colors.grey.shade100),
                        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
                      ),
                      child: Row(
                        children: [
                          Expanded(child: _buildSegment('monthly', 'মাসিক')),
                          Expanded(child: _buildSegment('yearly', 'বার্ষিক')),
                          Expanded(child: _buildSegment('custom', 'কাস্টম')),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),

                    // Line Chart
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(color: Colors.grey.shade100),
                        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('মাসিক খরচের গ্রাফ', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87)),
                          const SizedBox(height: 24),
                          SizedBox(
                            height: 200,
                            child: SimpleLineChart(data: _lineData, labels: _labels),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),

                    // Donut Chart
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(color: Colors.grey.shade100),
                        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text('খরচের বিভাগভিত্তিক বিশ্লেষণ', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87)),
                          const SizedBox(height: 20),
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(
                                width: 140,
                                height: 140,
                                child: Stack(
                                  alignment: Alignment.center,
                                  children: [
                                    DonutChart(
                                      values: _pieData.map((e) => e['value'] as double).toList(),
                                      colors: _pieData.map((e) => e['color'] as Color).toList(),
                                      strokeWidth: 20,
                                    ),
                                    Column(
                                      mainAxisSize: MainAxisSize.min,
                                      children: const [
                                        Text('৳8,450', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, color: Colors.black87)),
                                        Text('মোট খরচ', style: TextStyle(fontSize: 10, color: Colors.grey)),
                                      ],
                                    ),
                                  ],
                                ),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: Column(
                                  children: _pieData.map((item) {
                                    return InkWell(
                                      onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const DetailedAnalyticsScreen())),
                                      child: Padding(
                                        padding: const EdgeInsets.symmetric(vertical: 6),
                                        child: Row(
                                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                          children: [
                                            Row(
                                              children: [
                                                Container(width: 12, height: 12, decoration: BoxDecoration(color: item['color'], shape: BoxShape.circle)),
                                                const SizedBox(width: 8),
                                                Text(item['name'], style: const TextStyle(fontSize: 12, color: Colors.black87)),
                                              ],
                                            ),
                                            Row(
                                              children: [
                                                Text('${item['value'].toInt()}%', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12, color: Colors.black87)),
                                                const SizedBox(width: 4),
                                                Text('(${item['amount']})', style: const TextStyle(fontSize: 10, color: Colors.grey)),
                                              ],
                                            ),
                                          ],
                                        ),
                                      ),
                                    );
                                  }).toList(),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),

                    // Smart Insight
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFFBEB),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: const Color(0xFFFDE68A)),
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(8),
                            decoration: const BoxDecoration(color: Color(0xFFFEF3C7), shape: BoxShape.circle),
                            child: const Icon(Icons.lightbulb_outline, color: Color(0xFFD97706), size: 20),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: const [
                                Text('বিশেষ নির্দেশনা', style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14, color: Colors.black87)),
                                SizedBox(height: 4),
                                Text(
                                  'এই মাসে আপনার ওষুধের খরচ গত মাসের তুলনায় ১৮% বেশি। ওষুধের তালিকা রিভিউ করা যেতে পারে।',
                                  style: TextStyle(fontSize: 12, color: Colors.black54, height: 1.5),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 40),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSegment(String key, String label) {
    final isActive = _activeSegment == key;
    return InkWell(
      onTap: () => setState(() => _activeSegment = key),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        decoration: BoxDecoration(
          color: isActive ? const Color(0xFFE5F6EE) : Colors.transparent,
          borderRadius: BorderRadius.circular(12),
        ),
        alignment: Alignment.center,
        child: Text(
          label,
          style: TextStyle(
            fontWeight: FontWeight.w600,
            fontSize: 14,
            color: isActive ? const Color(0xFF08A86B) : Colors.grey,
          ),
        ),
      ),
    );
  }
}
