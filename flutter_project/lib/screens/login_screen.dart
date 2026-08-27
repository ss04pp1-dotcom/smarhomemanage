import 'package:flutter/material.dart';
import '../main.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});
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
              const Text('লগইন করুন', style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: Color(0xFF082B63))),
              const SizedBox(height: 40),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton.icon(
                  onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const MainNavigator())),
                  icon: const Icon(Icons.web, color: Colors.red),
                  label: const Text('Google দিয়ে লগইন করুন', style: TextStyle(fontSize: 16, color: Colors.black87)),
                  style: OutlinedButton.styleFrom(padding: const EdgeInsets.symmetric(vertical: 16), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
                ),
              ),
              const SizedBox(height: 16),
              TextButton(
                onPressed: () => Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => const MainNavigator())),
                child: const Text('পরে করব (Skip)', style: TextStyle(color: Colors.grey)),
              ),
              const Spacer(),
            ],
          ),
        ),
      ),
    );
  }
}
