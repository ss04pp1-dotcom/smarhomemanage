import 'dart:math';
import 'package:flutter/material.dart';

class DonutChart extends StatelessWidget {
  final List<double> values;
  final List<Color> colors;
  final double strokeWidth;

  const DonutChart({
    super.key,
    required this.values,
    required this.colors,
    this.strokeWidth = 16.0,
  });

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _DonutChartPainter(values, colors, strokeWidth),
      child: Container(),
    );
  }
}

class _DonutChartPainter extends CustomPainter {
  final List<double> values;
  final List<Color> colors;
  final double strokeWidth;

  _DonutChartPainter(this.values, this.colors, this.strokeWidth);

  @override
  void paint(Canvas canvas, Size size) {
    final double total = values.fold(0, (sum, item) => sum + item);
    double startAngle = -pi / 2;

    final Rect rect = Rect.fromLTWH(
        strokeWidth / 2, strokeWidth / 2, size.width - strokeWidth, size.height - strokeWidth);

    for (int i = 0; i < values.length; i++) {
      final sweepAngle = (values[i] / total) * 2 * pi;
      final paint = Paint()
        ..color = colors[i]
        ..style = PaintingStyle.stroke
        ..strokeWidth = strokeWidth;

      canvas.drawArc(rect, startAngle, sweepAngle, false, paint);
      startAngle += sweepAngle;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
