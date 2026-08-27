import 'package:flutter/material.dart';

class AddExpenseScreen extends StatefulWidget {
  const AddExpenseScreen({super.key});

  @override
  State<AddExpenseScreen> createState() => _AddExpenseScreenState();
}

class _AddExpenseScreenState extends State<AddExpenseScreen> {
  final _amountController = TextEditingController();
  final _titleController = TextEditingController();
  String _selectedCategory = 'medicine';

  final List<Map<String, dynamic>> _categories = [
    {'id': 'medicine', 'label': 'ওষুধ', 'icon': Icons.medical_services, 'color': Colors.green},
    {'id': 'doctor', 'label': 'ডাক্তার ফি', 'icon': Icons.health_and_safety, 'color': Colors.blue},
    {'id': 'test', 'label': 'টেস্ট/রিপোর্ট', 'icon': Icons.show_chart, 'color': Colors.orange},
    {'id': 'hospital', 'label': 'হাসপাতাল', 'icon': Icons.star, 'color': Colors.red},
    {'id': 'transport', 'label': 'যাতায়াত', 'icon': Icons.star, 'color': Colors.purple},
    {'id': 'other', 'label': 'অন্যান্য', 'icon': Icons.star, 'color': Colors.grey},
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        children: [
          // Header
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
            child: Row(
              children: [
                const Spacer(),
                const Text('নতুন খরচ যোগ করুন', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                const Spacer(),
              ],
            ),
          ),
          
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Amount Input
                  Center(
                    child: Column(
                      children: [
                        const Text('খরচের পরিমাণ', style: TextStyle(color: Colors.grey, fontSize: 14)),
                        const SizedBox(height: 8),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            const Text('৳', style: TextStyle(fontSize: 40, fontWeight: FontWeight.bold, color: Color(0xFF08A86B))),
                            SizedBox(
                              width: 150,
                              child: TextField(
                                controller: _amountController,
                                keyboardType: TextInputType.number,
                                textAlign: TextAlign.center,
                                style: const TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: Color(0xFF082B63)),
                                decoration: const InputDecoration(
                                  border: InputBorder.none,
                                  hintText: '0',
                                  hintStyle: TextStyle(color: Colors.grey),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  
                  const SizedBox(height: 32),
                  const Text('ক্যাটাগরি নির্বাচন করুন', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                  const SizedBox(height: 16),
                  
                  GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
                      childAspectRatio: 1,
                    ),
                    itemCount: _categories.length,
                    itemBuilder: (context, index) {
                      final cat = _categories[index];
                      final isSelected = _selectedCategory == cat['id'];
                      return GestureDetector(
                        onTap: () => setState(() => _selectedCategory = cat['id']),
                        child: Container(
                          decoration: BoxDecoration(
                            color: isSelected ? (cat['color'] as MaterialColor).shade50 : Colors.white,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(
                              color: isSelected ? cat['color'] : Colors.grey.shade200,
                              width: isSelected ? 2 : 1,
                            ),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Icon(cat['icon'], color: isSelected ? cat['color'] : Colors.grey, size: 28),
                              const SizedBox(height: 8),
                              Text(cat['label'], style: TextStyle(fontSize: 12, color: isSelected ? cat['color'] : Colors.grey, fontWeight: isSelected ? FontWeight.bold : FontWeight.normal)),
                            ],
                          ),
                        ),
                      );
                    },
                  ),
                  
                  const SizedBox(height: 32),
                  const Text('খরচের বিবরণ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _titleController,
                    decoration: InputDecoration(
                      hintText: 'যেমন: নাপা এক্সট্রা ও স্যালাইন',
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: BorderSide(color: Colors.grey.shade200),
                      ),
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: BorderSide(color: Colors.grey.shade200),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: const BorderSide(color: Color(0xFF08A86B)),
                      ),
                    ),
                  ),
                  
                  const SizedBox(height: 100), // Space for bottom button
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
