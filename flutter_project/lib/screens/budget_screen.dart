import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'home_screen.dart';
import 'settings_screen.dart';
import 'create_budget_screen.dart';

class BudgetScreen extends StatelessWidget {
  const BudgetScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      body: Stack(
        children: [
          SingleChildScrollView(
            padding: const EdgeInsets.only(bottom: 120),
            child: Column(
              children: [
                // Header Area
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
                      IconButton(
                        icon: const Icon(LucideIcons.arrowLeft, color: Colors.white),
                        onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const HomeScreen())),
                      ),
                      const Text('বাজেট সেটিং', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
                      IconButton(
                        icon: const Icon(LucideIcons.settings, color: Colors.white),
                        onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SettingsScreen())),
                      ),
                    ],
                  ),
                ),
                
                // Content overlapping header
                Transform.translate(
                  offset: const Offset(0, -32),
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        // Monthly Budget Card
                        Container(
                          padding: const EdgeInsets.all(24),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: Colors.grey.shade100),
                            boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
                          ),
                          child: Column(
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: const [
                                      Text('মাসিক বাজেট', style: TextStyle(color: Colors.black87, fontSize: 16, fontWeight: FontWeight.bold)),
                                      SizedBox(height: 4),
                                      Text('৳12,000', style: TextStyle(color: Color(0xFF08A86B), fontSize: 36, fontWeight: FontWeight.bold)),
                                    ],
                                  ),
                                  Container(
                                    width: 48,
                                    height: 48,
                                    decoration: const BoxDecoration(color: Color(0xFFE5F6EE), shape: BoxShape.circle),
                                    child: const Icon(LucideIcons.target, color: Color(0xFF08A86B), size: 28),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 16),
                              LinearProgressIndicator(
                                value: 0.56,
                                backgroundColor: Colors.grey.shade100,
                                valueColor: const AlwaysStoppedAnimation(Color(0xFF08A86B)),
                                minHeight: 8,
                                borderRadius: BorderRadius.circular(4),
                              ),
                              const SizedBox(height: 12),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: const [
                                  Text('56% ব্যবহৃত', style: TextStyle(color: Colors.grey, fontSize: 14)),
                                  Text('৳3,550 বাকি', style: TextStyle(color: Color(0xFF08A86B), fontSize: 14, fontWeight: FontWeight.bold)),
                                ],
                              ),
                            ],
                          ),
                        ),
                        
                        const SizedBox(height: 24),
                        const Text('বিভাগভিত্তিক বাজেট', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.black87)),
                        const SizedBox(height: 16),
                        
                        // Categories
                        _buildCategoryCard('ওষুধ', '5,000', 0.62, LucideIcons.pill, Colors.green.shade600, Colors.green.shade100, const Color(0xFFF59E0B)),
                        const SizedBox(height: 16),
                        _buildCategoryCard('ডাক্তার ফি', '2,000', 0.45, LucideIcons.stethoscope, Colors.blue.shade600, Colors.blue.shade100, const Color(0xFF08A86B)),
                        const SizedBox(height: 16),
                        _buildCategoryCard('পরীক্ষা-নিরীক্ষা', '4,000', 0.78, LucideIcons.activity, Colors.purple.shade600, Colors.purple.shade100, const Color(0xFFF97316)),
                        const SizedBox(height: 16),
                        _buildCategoryCard('জরুরি খরচ', '4,000', 0.40, LucideIcons.shieldAlert, Colors.red.shade600, Colors.red.shade100, const Color(0xFF08A86B)),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          
          // Sticky Action Button
          Positioned(
            bottom: 20,
            left: 20,
            right: 20,
            child: Container(
              decoration: BoxDecoration(
                boxShadow: [BoxShadow(color: const Color(0xFF082B63).withOpacity(0.2), blurRadius: 20, offset: const Offset(0, 10))],
              ),
              child: ElevatedButton.icon(
                onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const CreateBudgetScreen())),
                icon: const Icon(LucideIcons.plus, color: Colors.white),
                label: const Text('নতুন বাজেট নির্ধারণ', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF082B63),
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryCard(String name, String budget, double usedPercent, IconData icon, Color iconColor, Color iconBg, Color barColor) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.shade100),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(color: iconBg, shape: BoxShape.circle),
                child: Icon(icon, color: iconColor, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(name, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87)),
                    Text('৳$budget', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16, color: Colors.black87)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Padding(
            padding: const EdgeInsets.only(left: 52),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                LinearProgressIndicator(
                  value: usedPercent,
                  backgroundColor: Colors.grey.shade100,
                  valueColor: AlwaysStoppedAnimation(barColor),
                  minHeight: 6,
                  borderRadius: BorderRadius.circular(3),
                ),
                const SizedBox(height: 6),
                Text('${(usedPercent * 100).toInt()}% ব্যবহৃত', style: const TextStyle(color: Colors.grey, fontSize: 12, fontWeight: FontWeight.w500)),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
