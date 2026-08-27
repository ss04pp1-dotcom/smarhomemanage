import 'package:flutter/material.dart';
import 'login_screen.dart';

class OnboardingScreen extends StatelessWidget {
  const OnboardingScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Spacer(),
              const Icon(Icons.show_chart, size: 100, color: Color(0xFF08A86B)),
              const SizedBox(height: 40),
              const Text('আপনার স্বাস্থ্য ব্যয় ট্র্যাক করুন', textAlign: TextAlign.center, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
              const SizedBox(height: 16),
              const Text('খুব সহজেই পরিবারের সবার চিকিৎসা, ওষুধ ও টেস্টের খরচ হিসাব রাখুন।', textAlign: TextAlign.center, style: TextStyle(fontSize: 16, color: Colors.grey)),
              const Spacer(),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const LoginScreen())),
                  style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFF08A86B), padding: const EdgeInsets.symmetric(vertical: 16), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                  child: const Text('শুরু করুন', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
