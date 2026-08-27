import 'package:flutter/material.dart';
import 'edit_expense_screen.dart';
import 'search_screen.dart';

class HistoryScreen extends StatefulWidget {
  const HistoryScreen({super.key});

  @override
  State<HistoryScreen> createState() => _HistoryScreenState();
}

class _HistoryScreenState extends State<HistoryScreen> {
  String _activeFilter = 'সব';
  final List<String> _filters = ['সব', 'ওষুধ', 'ডাক্তার ফি', 'পরীক্ষা', 'হাসপাতাল'];

  final List<Map<String, dynamic>> _expenses = [
    {
      'title': 'ওষুধ ক্রয়',
      'subtitle': 'ফার্মেসী',
      'amount': '1,200',
      'date': '25 Aug',
      'icon': Icons.medical_services,
      'color': Colors.green.shade600,
      'bg': Colors.green.shade100,
    },
    {
      'title': 'ডাক্তার ফি',
      'subtitle': 'ডা. রহমান ক্লিনিক',
      'amount': '800',
      'date': '24 Aug',
      'icon': Icons.health_and_safety,
      'color': Colors.blue.shade600,
      'bg': Colors.blue.shade100,
    },
    {
      'title': 'পরীক্ষা-নিরীক্ষা',
      'subtitle': 'ল্যাব এইড',
      'amount': '1,500',
      'date': '22 Aug',
      'icon': Icons.show_chart,
      'color': Colors.orange.shade600,
      'bg': Colors.orange.shade100,
    },
    {
      'title': 'হাসপাতাল খরচ',
      'subtitle': 'সিটি হাসপাতাল',
      'amount': '3,000',
      'date': '20 Aug',
      'icon': Icons.bed,
      'color': Colors.purple.shade600,
      'bg': Colors.purple.shade100,
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                // Header
                Container(
                  padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
                  color: Colors.white,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'খরচের ইতিহাস',
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF082B63)),
                      ),
                      InkWell(
                        onTap: () => Navigator.push(context,
                            MaterialPageRoute(builder: (_) => const SearchScreen())),
                        child: Container(
                          width: 40,
                          height: 40,
                          decoration: BoxDecoration(
                            color: Colors.grey.shade50,
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.grey.shade100),
                          ),
                          child: const Icon(Icons.search,
                              color: Color(0xFF082B63), size: 20),
                        ),
                      ),
                    ],
                  ),
                ),
                // Filter Tabs
                Container(
                  height: 48,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border: Border(
                        bottom: BorderSide(color: Colors.grey.shade100)),
                  ),
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    itemCount: _filters.length,
                    itemBuilder: (context, index) {
                      final filter = _filters[index];
                      final isActive = _activeFilter == filter;
                      return Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4),
                        child: InkWell(
                          onTap: () => setState(() => _activeFilter = filter),
                          borderRadius: BorderRadius.circular(24),
                          child: Container(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 20, vertical: 8),
                            decoration: BoxDecoration(
                              color: isActive ? Colors.white : Colors.grey.shade50,
                              borderRadius: BorderRadius.circular(24),
                              border: Border.all(
                                color: isActive
                                    ? const Color(0xFF08A86B)
                                    : Colors.grey.shade200,
                                width: isActive ? 2 : 1,
                              ),
                            ),
                            alignment: Alignment.center,
                            child: Text(
                              filter,
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: isActive
                                    ? const Color(0xFF08A86B)
                                    : Colors.grey.shade500,
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
                // Expense List
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.fromLTRB(20, 24, 20, 100),
                    itemCount: _expenses.length,
                    separatorBuilder: (context, index) =>
                        const SizedBox(height: 16),
                    itemBuilder: (context, index) {
                      final expense = _expenses[index];
                      return InkWell(
                        onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (_) => const EditExpenseScreen())),
                        borderRadius: BorderRadius.circular(16),
                        child: Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: Colors.grey.shade100),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.02),
                                blurRadius: 4,
                                offset: const Offset(0, 2),
                              )
                            ],
                          ),
                          child: Row(
                            children: [
                              Container(
                                width: 48,
                                height: 48,
                                decoration: BoxDecoration(
                                    color: expense['bg'], shape: BoxShape.circle),
                                child: Icon(expense['icon'],
                                    color: expense['color'], size: 24),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      expense['title'],
                                      style: const TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 16,
                                          color: Colors.black87),
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                    ),
                                    const SizedBox(height: 4),
                                    Text(
                                      expense['subtitle'],
                                      style: const TextStyle(
                                          fontSize: 12, color: Colors.grey),
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                    ),
                                  ],
                                ),
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: [
                                  Text(
                                    '৳${expense['amount']}',
                                    style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 16,
                                        color: Color(0xFF08A86B)),
                                  ),
                                  const SizedBox(height: 4),
                                  Row(
                                    children: [
                                      Text(
                                        expense['date'],
                                        style: const TextStyle(
                                            fontSize: 12, color: Colors.grey),
                                      ),
                                      const SizedBox(width: 4),
                                      const Icon(Icons.chevron_right,
                                          size: 14, color: Colors.grey),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
            // Sticky Footer
            Positioned(
              bottom: 20,
              left: 20,
              right: 20,
              child: Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: const Color(0xFFE5F6EE),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFCCECE0)),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.white.withOpacity(0.9),
                      blurRadius: 20,
                      spreadRadius: 10,
                      offset: const Offset(0, -10),
                    )
                  ],
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          width: 40,
                          height: 40,
                          decoration: const BoxDecoration(
                              color: Colors.white, shape: BoxShape.circle),
                          child: const Icon(Icons.medical_services,
                              color: Color(0xFF08A86B), size: 20),
                        ),
                        const SizedBox(width: 12),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisSize: MainAxisSize.min,
                          children: const [
                            Text('মোট খরচ (এই মাস)',
                                style: TextStyle(
                                    fontSize: 12,
                                    color: Colors.black54,
                                    fontWeight: FontWeight.w600)),
                            Text('৳8,450',
                                style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                    color: Colors.black87)),
                          ],
                        ),
                      ],
                    ),
                    Row(
                      children: const [
                        Text('সব ইতিহাস দেখুন',
                            style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF082B63))),
                        Icon(Icons.chevron_right,
                            size: 16, color: Color(0xFF082B63)),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
