import 'package:flutter/material.dart';

class SimpleLineChart extends StatelessWidget {
  final List<double> data;
  final List<String> labels;
  final Color color;

  const SimpleLineChart({
    super.key,
    required this.data,
    required this.labels,
    this.color = const Color(0xFF08A86B),
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return CustomPaint(
          size: Size(constraints.maxWidth, constraints.maxHeight),
          painter: _LineChartPainter(data, labels, color),
        );
      },
    );
  }
}

class _LineChartPainter extends CustomPainter {
  final List<double> data;
  final List<String> labels;
  final Color color;

  _LineChartPainter(this.data, this.labels, this.color);

  @override
  void paint(Canvas canvas, Size size) {
    if (data.isEmpty) return;

    final double maxVal = data.reduce((a, b) => a > b ? a : b);
    final double minVal = 0; // Fixed min value
    final double range = maxVal - minVal;

    final double startX = 30.0; // Space for Y axis labels
    final double endX = size.width - 10.0;
    final double startY = 10.0;
    final double endY = size.height - 30.0; // Space for X axis labels

    final double width = endX - startX;
    final double height = endY - startY;

    final Paint axisPaint = Paint()
      ..color = Colors.grey.shade300
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;

    final Paint gridPaint = Paint()
      ..color = Colors.grey.shade100
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;

    final Paint linePaint = Paint()
      ..color = color
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke
      ..strokeJoin = StrokeJoin.round;

    final Paint dotPaint = Paint()
      ..color = color
      ..style = PaintingStyle.fill;

    // Draw grid and Y labels
    const int yLines = 4;
    for (int i = 0; i <= yLines; i++) {
      final double y = startY + (height / yLines) * i;
      final double val = maxVal - (range / yLines) * i;
      
      // Grid line
      canvas.drawLine(Offset(startX, y), Offset(endX, y), gridPaint);
      
      // Y label
      final String labelText = val == 0 ? '0' : '${(val / 1000).toStringAsFixed(1)}k';
      final TextPainter tp = TextPainter(
        text: TextSpan(text: labelText, style: const TextStyle(color: Colors.grey, fontSize: 10)),
        textDirection: TextDirection.ltr,
      );
      tp.layout();
      tp.paint(canvas, Offset(startX - tp.width - 5, y - tp.height / 2));
    }

    // Draw X labels and line
    final Path path = Path();
    for (int i = 0; i < data.length; i++) {
      final double x = startX + (width / (data.length - 1)) * i;
      final double y = startY + height - ((data[i] - minVal) / range) * height;

      if (i == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }

      // X label
      final TextPainter tp = TextPainter(
        text: TextSpan(text: labels[i], style: const TextStyle(color: Colors.grey, fontSize: 10)),
        textDirection: TextDirection.ltr,
      );
      tp.layout();
      tp.paint(canvas, Offset(x - tp.width / 2, endY + 10));
    }

    canvas.drawPath(path, linePaint);

    // Draw dots
    for (int i = 0; i < data.length; i++) {
      final double x = startX + (width / (data.length - 1)) * i;
      final double y = startY + height - ((data[i] - minVal) / range) * height;
      
      if (i == data.length - 1) {
        // Last point is special
        final Paint activeDotPaint = Paint()..color = color..style = PaintingStyle.fill;
        final Paint activeDotBorder = Paint()..color = Colors.white..strokeWidth = 2..style = PaintingStyle.stroke;
        canvas.drawCircle(Offset(x, y), 6, activeDotPaint);
        canvas.drawCircle(Offset(x, y), 6, activeDotBorder);

        // Tooltip
        final Rect tooltipRect = Rect.fromCenter(center: Offset(x, y - 24), width: 60, height: 24);
        final RRect rTooltip = RRect.fromRectAndRadius(tooltipRect, const Radius.circular(4));
        canvas.drawRRect(rTooltip, Paint()..color = color);
        
        final TextPainter tp = TextPainter(
          text: const TextSpan(text: '৳8,450', style: TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.bold)),
          textDirection: TextDirection.ltr,
        );
        tp.layout();
        tp.paint(canvas, Offset(x - tp.width / 2, y - 24 - tp.height / 2));

      } else {
        canvas.drawCircle(Offset(x, y), 4, dotPaint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
