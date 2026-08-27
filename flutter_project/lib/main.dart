import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'screens/splash_screen.dart';
import 'screens/home_screen.dart';
import 'screens/add_expense_screen.dart';
import 'screens/analytics_screen.dart';
import 'screens/budget_screen.dart';
import 'screens/history_screen.dart';

void main() {
  runApp(const HealthExpenseApp());
}

class HealthExpenseApp extends StatelessWidget {
  const HealthExpenseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'স্বাস্থ্য ব্যয়',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xFFF7F9FC),
        textTheme: GoogleFonts.notoSansBengaliTextTheme(
          Theme.of(context).textTheme,
        ),
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF08A86B)),
        useMaterial3: true,
      ),
      home: const SplashScreen(),
    );
  }
}

class MainNavigator extends StatefulWidget {
  const MainNavigator({super.key});

  @override
  State<MainNavigator> createState() => _MainNavigatorState();
}

class _MainNavigatorState extends State<MainNavigator> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    const HomeScreen(),
    const AddExpenseScreen(),
    const AnalyticsScreen(),
    const BudgetScreen(),
    const HistoryScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: Container(
        decoration: BoxDecoration(
          border: Border(top: BorderSide(color: Colors.grey.shade200, width: 1)),
        ),
        child: BottomNavigationBar(
          currentIndex: _currentIndex,
          onTap: (index) => setState(() => _currentIndex = index),
          type: BottomNavigationBarType.fixed,
          backgroundColor: Colors.white,
          selectedItemColor: const Color(0xFF08A86B),
          unselectedItemColor: Colors.grey,
          selectedLabelStyle: const TextStyle(fontWeight: FontWeight.bold, fontSize: 10),
          unselectedLabelStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.w500),
          elevation: 0,
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: 'হোম'),
            BottomNavigationBarItem(icon: Icon(Icons.add_circle_outline), label: 'খরচ'),
            BottomNavigationBarItem(icon: Icon(Icons.pie_chart), label: 'বিশ্লেষণ'),
            BottomNavigationBarItem(icon: Icon(Icons.adjust), label: 'বাজেট'),
            BottomNavigationBarItem(icon: Icon(Icons.history), label: 'ইতিহাস'),
          ],
        ),
      ),
    );
  }
}
