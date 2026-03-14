// Analog Clock

// Not annotated yet. Check back
// later)

const TAU = Math.PI * 2;

function hand(angle, length, width, color) {
  const cx = W / 2, cy = H / 2;
  const a = angle - Math.PI / 2;
  draw_line({
    x1: cx, y1: cy,
    x2: cx + Math.cos(a) * length,
    y2: cy + Math.sin(a) * length,
    color,
    lineWidth: width,
  });
}

loop(() => {
  const now = new Date();
  const sec  = now.getSeconds() + now.getMilliseconds() / 1000;
  const min  = now.getMinutes() + sec / 60;
  const hour = (now.getHours() % 12) + min / 60;
  const R = Math.min(W, H) * 0.4;
  const cx = W / 2, cy = H / 2;

  clear({ color: '#111122' });

  // Face
  draw_circle({ x: cx, y: cy, r: R, fill: '#1a1a2e', stroke: '#7c7cff', lineWidth: 3 });

  // Hour ticks
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU - Math.PI / 2;
    draw_line({
      x1: cx + Math.cos(a) * R * 0.85,
      y1: cy + Math.sin(a) * R * 0.85,
      x2: cx + Math.cos(a) * R * 0.95,
      y2: cy + Math.sin(a) * R * 0.95,
      color: '#aaaacc',
      lineWidth: 2,
    });
  }

  hand((hour / 12) * TAU,  R * 0.55, 6,  '#e0e0ff');
  hand((min  / 60) * TAU,  R * 0.75, 3,  '#a0a0ff');
  hand((sec  / 60) * TAU,  R * 0.85, 1.5,'#ff6b6b');

  // Center dot
  draw_circle({ x: cx, y: cy, r: 5, fill: '#ff6b6b' });
});
