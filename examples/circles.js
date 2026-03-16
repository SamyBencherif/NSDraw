// 

const NUM = 30;
const circles = [];

for (let i = 0; i < NUM; i++) {
  const r = 10 + Math.random() * 40;
  circles.push({
    x: r + Math.random() * (W - r * 2),
    y: r + Math.random() * (H - r * 2),
    r,
    vx: (Math.random() - 0.5) * 200,
    vy: (Math.random() - 0.5) * 200,
    color: `hsl(${Math.random() * 360}, 70%, 65%)`,
  });
}

loop((dt) => {
  const s = dt / 1000;

  clear({ color: '#0d0d1a' });

  for (const c of circles) {
    c.x += c.vx * s;
    c.y += c.vy * s;

    if (c.x - c.r < 0)  { c.x = c.r;      c.vx = Math.abs(c.vx); }
    if (c.x + c.r > W)  { c.x = W - c.r;  c.vx = -Math.abs(c.vx); }
    if (c.y - c.r < 0)  { c.y = c.r;      c.vy = Math.abs(c.vy); }
    if (c.y + c.r > H)  { c.y = H - c.r;  c.vy = -Math.abs(c.vy); }

    draw_circle({ x: c.x, y: c.y, r: c.r, fill: c.color });
  }
});
