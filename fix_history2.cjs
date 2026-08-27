const fs = require('fs');
let file = 'flutter_project/lib/screens/history_screen.dart';
let content = fs.readFileSync(file, 'utf8');

// fix double context
content = content.replace(
  "Widget _buildTransactionItem(context, BuildContext context, IconData icon, String title, String subtitle, String amount, String date, MaterialColor color) {",
  "Widget _buildTransactionItem(BuildContext context, IconData icon, String title, String subtitle, String amount, String date, MaterialColor color) {"
);

// fix missing closing bracket and parenthesis for SafeArea
content = content.replace("      ),\n  }", "      ),\n    );\n  }");

fs.writeFileSync(file, content);
