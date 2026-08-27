const fs = require('fs');

function replaceFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.from, r.to);
  }
  fs.writeFileSync(file, content);
}

replaceFile('flutter_project/lib/screens/add_expense_screen.dart', [
  { from: "Icons.star, color: Colors.blue", to: "Icons.apartment, color: Colors.blue" },
  { from: "Icons.star, color: Colors.orange", to: "Icons.directions_car, color: Colors.orange" },
  { from: "Icons.star, color: Colors.grey", to: "Icons.grid_view, color: Colors.grey" }
]);

replaceFile('flutter_project/lib/screens/detailed_analytics_screen.dart', [
  { from: "Icons.star", to: "Icons.bar_chart" }
]);

replaceFile('flutter_project/lib/screens/family_members_screen.dart', [
  { from: "Icons.star", to: "Icons.person_add" }
]);

replaceFile('flutter_project/lib/screens/full_report_preview_screen.dart', [
  { from: "Icons.star", to: "Icons.share" }
]);

replaceFile('flutter_project/lib/screens/login_screen.dart', [
  { from: "Icons.star", to: "Icons.web" }
]);

replaceFile('flutter_project/lib/screens/notifications_screen.dart', [
  { from: "Icons.star", to: "Icons.check_circle" },
  { from: "Icons.star", to: "Icons.check_circle" }
]);

replaceFile('flutter_project/lib/screens/success_screen.dart', [
  { from: "Icons.star", to: "Icons.check_circle" }
]);
