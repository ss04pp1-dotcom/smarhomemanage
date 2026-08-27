const fs = require('fs');
const path = require('path');

const iconMap = {
  'LucideIcons.home': 'Icons.home',
  'LucideIcons.plusCircle': 'Icons.add_circle_outline',
  'LucideIcons.pieChart': 'Icons.pie_chart',
  'LucideIcons.target': 'Icons.adjust',
  'LucideIcons.history': 'Icons.history',
  'LucideIcons.arrowLeft': 'Icons.arrow_back',
  'LucideIcons.settings': 'Icons.settings',
  'LucideIcons.bell': 'Icons.notifications',
  'LucideIcons.menu': 'Icons.menu',
  'LucideIcons.search': 'Icons.search',
  'LucideIcons.plus': 'Icons.add',
  'LucideIcons.dollarSign': 'Icons.attach_money',
  'LucideIcons.fileText': 'Icons.description',
  'LucideIcons.users': 'Icons.people',
  'LucideIcons.edit3': 'Icons.edit',
  'LucideIcons.pill': 'Icons.medical_services',
  'LucideIcons.stethoscope': 'Icons.health_and_safety',
  'LucideIcons.activity': 'Icons.show_chart',
  'LucideIcons.shieldAlert': 'Icons.warning',
  'LucideIcons.heartPulse': 'Icons.favorite',
  'LucideIcons.check': 'Icons.check',
  'LucideIcons.chevronRight': 'Icons.chevron_right',
  'LucideIcons.user': 'Icons.person',
  'LucideIcons.database': 'Icons.backup',
  'LucideIcons.moon': 'Icons.dark_mode',
  'LucideIcons.globe': 'Icons.language',
  'LucideIcons.helpCircle': 'Icons.help',
  'LucideIcons.logOut': 'Icons.logout',
  'LucideIcons.arrowDownCircle': 'Icons.arrow_circle_down',
  'LucideIcons.arrowUpCircle': 'Icons.arrow_circle_up',
  'LucideIcons.filter': 'Icons.filter_list',
  'LucideIcons.x': 'Icons.close',
  'LucideIcons.calendar': 'Icons.calendar_today',
  'LucideIcons.camera': 'Icons.camera_alt',
  'LucideIcons.image': 'Icons.image',
  'LucideIcons.trash2': 'Icons.delete',
  'LucideIcons.download': 'Icons.download',
  'LucideIcons.share2': 'Icons.share',
  'LucideIcons.barChart2': 'Icons.bar_chart',
  'LucideIcons.trendingUp': 'Icons.trending_up',
  'LucideIcons.moreVertical': 'Icons.more_vert',
  'LucideIcons.trendingDown': 'Icons.trending_down',
  'LucideIcons.clock': 'Icons.access_time',
  'LucideIcons.filePlus': 'Icons.post_add',
  'LucideIcons.smartphone': 'Icons.smartphone',
  'LucideIcons.monitor': 'Icons.computer',
  'LucideIcons.cloud': 'Icons.cloud',
  'LucideIcons.eye': 'Icons.visibility',
  'LucideIcons.eyeOff': 'Icons.visibility_off',
  'LucideIcons.alertTriangle': 'Icons.warning_amber',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.dart')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove import
      content = content.replace(/import 'package:lucide_icons\/lucide_icons\.dart';\n?/g, '');
      
      // Replace icons
      let matches = content.match(/LucideIcons\.[a-zA-Z0-9_]+/g);
      if (matches) {
        for (const match of matches) {
          if (iconMap[match]) {
            content = content.replace(new RegExp(match.replace(/\./g, '\\.'), 'g'), iconMap[match]);
          } else {
            console.log(`WARNING: Unmapped icon ${match} in ${fullPath}`);
            // default fallback
            content = content.replace(new RegExp(match.replace(/\./g, '\\.'), 'g'), 'Icons.star');
          }
        }
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDirectory('flutter_project/lib');
