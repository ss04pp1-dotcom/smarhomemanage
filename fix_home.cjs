const fs = require('fs');
let file = 'flutter_project/lib/screens/home_screen.dart';
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes("import '../widgets/donut_chart.dart';")) {
  content = content.replace(
    "import 'report_screen.dart';",
    "import 'report_screen.dart';\nimport '../widgets/donut_chart.dart';"
  );
}

// Replace placeholder with DonutChart
const placeholder = `                              Container(
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
                              ),`;

const realChart = `                              SizedBox(
                                width: 120,
                                height: 120,
                                child: DonutChart(
                                  values: const [45, 25, 20, 10],
                                  colors: [
                                    const Color(0xFF08A86B),
                                    Colors.indigo.shade400,
                                    Colors.orange.shade400,
                                    Colors.teal.shade400,
                                  ],
                                  strokeWidth: 16,
                                ),
                              ),`;

content = content.replace(placeholder, realChart);

fs.writeFileSync(file, content);
