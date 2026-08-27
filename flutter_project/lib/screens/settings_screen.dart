import 'package:flutter/material.dart';
import 'profile_edit_screen.dart';
import 'backup_sync_screen.dart';
import 'login_screen.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 20, 20, 10),
            child: Row(
              children: [
                const Spacer(),
                const Text('সেটিংস', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
                const Spacer(),
              ],
            ),
          ),
          
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  _buildSettingsGroup([
                    _buildSettingsItem(context, Icons.person, 'প্রোফাইল সম্পাদনা', Colors.blue, destination: const ProfileEditScreen()),
                    _buildSettingsItem(context, Icons.adjust, 'বাজেট সেটিংস', Colors.green),
                    _buildSettingsItem(context, Icons.notifications, 'নোটিফিকেশন সেটিংস', Colors.orange),
                    _buildSettingsItem(context, Icons.backup, 'ডেটা ব্যাকআপ', Colors.purple, showBorder: false, destination: const BackupSyncScreen()),
                  ]),
                  const SizedBox(height: 24),
                  
                  _buildSettingsGroup([
                    _buildSettingsItem(context, Icons.dark_mode, 'ডার্ক মোড', Colors.indigo, isToggle: true, toggleValue: false),
                    _buildSettingsItem(context, Icons.language, 'ভাষা', Colors.blue, subtitle: 'বাংলা', showBorder: false),
                  ]),
                  const SizedBox(height: 24),
                  
                  _buildSettingsGroup([
                    _buildSettingsItem(context, Icons.help, 'সাহায্য ও সহায়তা', Colors.teal),
                    _buildSettingsItem(context, Icons.logout, 'লগআউট', Colors.red, isLogout: true, showBorder: false, destination: const LoginScreen()),
                  ]),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSettingsGroup(List<Widget> items) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.grey.shade100),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.05),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        children: items,
      ),
    );
  }

  Widget _buildSettingsItem(BuildContext context, IconData icon, String title, MaterialColor color, {bool showBorder = true, bool isToggle = false, bool toggleValue = false, String? subtitle, bool isLogout = false, Widget? destination}) {
    return InkWell(
      onTap: () {
        if (destination != null) {
          if (isLogout) {
             Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => destination));
          } else {
             Navigator.push(context, MaterialPageRoute(builder: (_) => destination));
          }
        }
      },
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 16),
        decoration: BoxDecoration(
          border: showBorder ? Border(bottom: BorderSide(color: Colors.grey.shade100)) : null,
        ),
        child: Row(
          children: [
            Icon(icon, color: isLogout ? Colors.red : color, size: 22),
            const SizedBox(width: 16),
            Expanded(
              child: Text(title, style: TextStyle(fontSize: 16, color: isLogout ? Colors.red : Colors.grey.shade800, fontWeight: FontWeight.w500)),
            ),
            if (subtitle != null) ...[
              Text(subtitle, style: const TextStyle(color: Colors.grey)),
              const SizedBox(width: 8),
            ],
            if (isToggle)
              Switch(
                value: toggleValue,
                onChanged: (val) {},
                activeColor: const Color(0xFF08A86B),
              )
            else
              const Icon(Icons.chevron_right, color: Colors.grey, size: 20),
          ],
        ),
      ),
    );
  }
}
