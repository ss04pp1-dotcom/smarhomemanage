import 'package:flutter/material.dart';
import 'settings_screen.dart';
import 'notifications_screen.dart';
import 'family_members_screen.dart';
import 'add_expense_screen.dart';
import 'budget_screen.dart';
import 'report_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF7F9FC),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Header Area
            Container(
              width: double.infinity,
              padding: const EdgeInsets.only(top: 48, left: 24, right: 24, bottom: 96),
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
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      IconButton(
                        onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SettingsScreen())),
                        icon: const Icon(Icons.menu, color: Colors.white),
                        padding: EdgeInsets.zero,
                        constraints: const BoxConstraints(),
                      ),
                      Column(
                        children: [
                          Row(
                            children: [
                              Container(
                                width: 32,
                                height: 32,
                                decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                                alignment: Alignment.center,
                                child: Container(
                                  width: 16,
                                  height: 16,
                                  decoration: BoxDecoration(color: const Color(0xFF08A86B), borderRadius: BorderRadius.circular(4)),
                                  transform: Matrix4.rotationZ(0.785398),
                                  alignment: Alignment.center,
                                  child: Container(
                                    width: 16,
                                    height: 16,
                                    decoration: BoxDecoration(color: const Color(0xFF08A86B), borderRadius: BorderRadius.circular(4), border: Border.all(color: Colors.white, width: 2)),
                                    transform: Matrix4.identity()..scale(0.75),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 8),
                              const Text('স্বাস্থ্য ব্যয়', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold)),
                            ],
                          ),
                          const Text('বিশ্লেষণ', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold, height: 1.0)),
                          const SizedBox(height: 4),
                          const Text('সচেতন ব্যয়, সুস্থ জীবন', style: TextStyle(color: Colors.white70, fontSize: 14)),
                        ],
                      ),
                      Stack(
                        children: [
                          IconButton(
                            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const NotificationsScreen())),
                            icon: const Icon(Icons.notifications, color: Colors.white),
                            padding: EdgeInsets.zero,
                            constraints: const BoxConstraints(),
                          ),
                          Positioned(
                            top: 0,
                            right: 0,
                            child: Container(
                              width: 10,
                              height: 10,
                              decoration: BoxDecoration(
                                color: Colors.red,
                                shape: BoxShape.circle,
                                border: Border.all(color: const Color(0xFF082B63), width: 2),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
            
            // Main Content Area overlapping header
            Transform.translate(
              offset: const Offset(0, -64),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Monthly Summary Card
                    Container(
                      padding: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          begin: Alignment.centerLeft,
                          end: Alignment.centerRight,
                          colors: [Color(0xFF08A86B), Color(0xFF068A57)],
                        ),
                        borderRadius: BorderRadius.circular(24),
                        boxShadow: [
                          BoxShadow(color: Colors.black.withOpacity(0.1), blurRadius: 10, offset: const Offset(0, 4)),
                        ],
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
                                  Text('এই মাসের মোট খরচ', style: TextStyle(color: Colors.white70, fontSize: 14)),
                                  SizedBox(height: 4),
                                  Text('৳8,450', style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.bold)),
                                ],
                              ),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.end,
                                children: const [
                                  Text('বাজেট', style: TextStyle(color: Colors.white70, fontSize: 14)),
                                  SizedBox(height: 4),
                                  Text('৳12,000', style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w600)),
                                ],
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          LinearProgressIndicator(
                            value: 0.56,
                            backgroundColor: Colors.white30,
                            valueColor: const AlwaysStoppedAnimation(Colors.white),
                            minHeight: 6,
                            borderRadius: BorderRadius.circular(3),
                          ),
                          const SizedBox(height: 8),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: const [
                              Text('56% ব্যবহৃত', style: TextStyle(color: Colors.white, fontSize: 14)),
                              Text('৳3,550 বাকি', style: TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w500)),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),
                    
                    // 4 Stat Cards
                    GridView.count(
                      crossAxisCount: 2,
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisSpacing: 16,
                      mainAxisSpacing: 16,
                      childAspectRatio: 2.2,
                      children: [
                        _buildStatCard('গত মাস', '৳6,800', const Icon(Icons.attach_money, color: Color(0xFF08A86B), size: 20), const Color(0xFFE5F6EE)),
                        _buildStatCard('ব্যয় বৃদ্ধি', '+18%', const Icon(Icons.pie_chart, color: Colors.teal, size: 20), Colors.teal.shade50),
                        _buildStatCard('মোট লেনদেন', '42', const Icon(Icons.description, color: Colors.indigo, size: 20), Colors.indigo.shade50),
                        InkWell(
                          onTap: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const FamilyMembersScreen())),
                          child: _buildStatCard('পরিবার সদস্য', '3', const Icon(Icons.people, color: Colors.blue, size: 20), Colors.blue.shade50),
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),
                    
                    // Quick Actions
                    const Text('দ্রুত পদক্ষেপ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: Colors.black87)),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Expanded(child: _buildQuickAction(context, 'খরচ যোগ করুন', Icons.edit, const Color(0xFFE5F6EE), const Color(0xFFCCECE0), const Color(0xFF08A86B), const AddExpenseScreen())),
                        const SizedBox(width: 12),
                        Expanded(child: _buildQuickAction(context, 'বাজেট সেট করুন', Icons.adjust, Colors.indigo.shade50, Colors.indigo.shade100, Colors.indigo.shade600, const BudgetScreen())),
                        const SizedBox(width: 12),
                        Expanded(child: _buildQuickAction(context, 'রিপোর্ট দেখুন', Icons.description, Colors.teal.shade50, Colors.teal.shade100, Colors.teal.shade600, const ReportScreen())),
                      ],
                    ),
                    const SizedBox(height: 24),
                    
                    // Expense Summary Chart Placeholder (Since we don't have Recharts)
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
                          const Text('খরচের সারাংশ', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, color: Colors.black87)),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              Container(
                                width: 120,
                                height: 120,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  border: Border.all(color: const Color(0xFF08A86B), width: 16),
                                ),
                                child: Center(
                                  child: Container(
                                    width: 80,
                                    height: 80,
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      border: Border.all(color: Colors.indigo.shade400, width: 16),
                                    ),
                                  ),
                                ),
                              ),
                              const SizedBox(width: 24),
                              Expanded(
                                child: Column(
                                  children: [
                                    _buildLegendItem('ওষুধ', '45%', const Color(0xFF08A86B)),
                                    const SizedBox(height: 8),
                                    _buildLegendItem('ডাক্তার ফি', '25%', Colors.indigo.shade400),
                                    const SizedBox(height: 8),
                                    _buildLegendItem('টেস্ট/রিপোর্ট', '20%', Colors.orange.shade400),
                                    const SizedBox(height: 8),
                                    _buildLegendItem('যাতায়াত', '10%', Colors.teal.shade400),
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
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

  Widget _buildStatCard(String title, String value, Icon icon, Color bgColor) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.shade100),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.02), blurRadius: 4, offset: const Offset(0, 2))],
      ),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: bgColor, shape: BoxShape.circle),
            child: icon,
          ),
          const SizedBox(width: 12),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(title, style: const TextStyle(color: Colors.grey, fontSize: 12)),
              Text(value, style: const TextStyle(color: Colors.black87, fontSize: 16, fontWeight: FontWeight.bold)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildQuickAction(BuildContext context, String title, IconData icon, Color bgColor, Color borderColor, Color iconColor, Widget destination) {
    return InkWell(
      onTap: () {
        Navigator.push(context, MaterialPageRoute(builder: (_) => destination));
      },
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 8),
        decoration: BoxDecoration(
          color: bgColor,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: borderColor),
        ),
        child: Column(
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle, boxShadow: [
                BoxShadow(color: Colors.black12, blurRadius: 4, offset: Offset(0, 2))
              ]),
              child: Icon(icon, color: iconColor, size: 20),
            ),
            const SizedBox(height: 8),
            Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: Colors.black87)),
          ],
        ),
      ),
    );
  }

  Widget _buildLegendItem(String label, String percentage, Color color) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            Container(width: 10, height: 10, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
            const SizedBox(width: 8),
            Text(label, style: const TextStyle(color: Colors.grey, fontSize: 12)),
          ],
        ),
        Text(percentage, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 12, color: Colors.black87)),
      ],
    );
  }
}
