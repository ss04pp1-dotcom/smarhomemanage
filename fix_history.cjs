const fs = require('fs');
let file = 'flutter_project/lib/screens/history_screen.dart';
let content = fs.readFileSync(file, 'utf8');

// fix syntax error
content = content.replace("    ));\n  }", "  }");

// pass context
content = content.replace(
  "Widget _buildTransactionItem(IconData icon, String title, String subtitle, String amount, String date, MaterialColor color) {",
  "Widget _buildTransactionItem(BuildContext context, IconData icon, String title, String subtitle, String amount, String date, MaterialColor color) {"
);

// update callers
content = content.replace(/_buildTransactionItem\(/g, "_buildTransactionItem(context, ");

fs.writeFileSync(file, content);
