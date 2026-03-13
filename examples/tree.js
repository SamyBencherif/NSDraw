// Fractal Tree

function branch(x1, y1, angle, length, depth) {
  if (depth === 0 || length < 2) return;

  const x2 = x1 + Math.cos(angle) * length;
  const y2 = y1 + Math.sin(angle) * length;

  const green = Math.floor(80 + depth * 12);
  draw_line({
    x1, y1, x2, y2,
    color: `rgb(${60 - depth * 4}, ${green}, 40)`,
    lineWidth: depth * 0.8,
  });

  branch(x2, y2, angle - 0.4, length * 0.72, depth - 1);
  branch(x2, y2, angle + 0.4, length * 0.72, depth - 1);
}

clear({ color: '#0a1a0a' });
branch(W / 2, H * 0.9, -Math.PI / 2, H * 0.22, 11);
