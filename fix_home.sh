sed -i 's/import '\''family_members_screen.dart'\'';/import '\''family_members_screen.dart'\'';\nimport '\''add_expense_screen.dart'\'';\nimport '\''budget_screen.dart'\'';\nimport '\''report_screen.dart'\'';/g' flutter_project/lib/screens/home_screen.dart

sed -i 's/Expanded(child: _buildQuickAction(context, '\''খরচ যোগ করুন'\'', LucideIcons.edit3, const Color(0xFFE5F6EE), const Color(0xFFCCECE0), const Color(0xFF08A86B))),/Expanded(child: _buildQuickAction(context, '\''খরচ যোগ করুন'\'', LucideIcons.edit3, const Color(0xFFE5F6EE), const Color(0xFFCCECE0), const Color(0xFF08A86B), const AddExpenseScreen())),/g' flutter_project/lib/screens/home_screen.dart

sed -i 's/Expanded(child: _buildQuickAction(context, '\''বাজেট সেট করুন'\'', LucideIcons.target, Colors.indigo.shade50, Colors.indigo.shade100, Colors.indigo.shade600)),/Expanded(child: _buildQuickAction(context, '\''বাজেট সেট করুন'\'', LucideIcons.target, Colors.indigo.shade50, Colors.indigo.shade100, Colors.indigo.shade600, const BudgetScreen())),/g' flutter_project/lib/screens/home_screen.dart

sed -i 's/Expanded(child: _buildQuickAction(context, '\''রিপোর্ট দেখুন'\'', LucideIcons.fileText, Colors.teal.shade50, Colors.teal.shade100, Colors.teal.shade600)),/Expanded(child: _buildQuickAction(context, '\''রিপোর্ট দেখুন'\'', LucideIcons.fileText, Colors.teal.shade50, Colors.teal.shade100, Colors.teal.shade600, const ReportScreen())),/g' flutter_project/lib/screens/home_screen.dart

sed -i 's/Widget _buildQuickAction(BuildContext context, String title, IconData icon, Color bgColor, Color borderColor, Color iconColor) {/Widget _buildQuickAction(BuildContext context, String title, IconData icon, Color bgColor, Color borderColor, Color iconColor, Widget destination) {/g' flutter_project/lib/screens/home_screen.dart

sed -i 's/\/\/ Navigation could be handled if we had global navigator, but for simplicity, they will just tap./Navigator.push(context, MaterialPageRoute(builder: (_) => destination));/g' flutter_project/lib/screens/home_screen.dart
