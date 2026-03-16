// NSDraw.js — Canvas convenience library
// Globals set up: canvas, ctx, W, H

const canvas = document.getElementById('nsdraw-canvas');
const ctx = canvas.getContext('2d');
let W, H;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  W = canvas.width;
  H = canvas.height;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// --- Mouse / touch position ---

let mx = 0, my = 0, md = 0;

const prev_frame = {};

function mouse_down_this_frame()
{
  return md && !prev_frame['md'];
}

function mouse_up_this_frame()
{
  return !md && prev_frame['md'];
}

window.addEventListener('mousedown', (e) => { md = 1; });
window.addEventListener('mouseup', (e) => { md = 0; });
window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
window.addEventListener('touchmove', (e) => {
  const t = e.touches[0];
  mx = t.clientX; my = t.clientY;
}, { passive: true });
window.addEventListener('touchstart', (e) => {
  const t = e.touches[0];
  mx = t.clientX; my = t.clientY;
  md = 1;
}, { passive: true });
window.addEventListener('touchend', (e) => { md = 0; });

// --- Drawing functions ---

function clear({ color = '#000000' } = {}) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

function draw_circle({ x = 0, y = 0, r = 50, fill = 'white', stroke = null, lineWidth = 1 } = {}) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
  ctx.restore();
}

function draw_rect({ x = 0, y = 0, w = 100, h = 100, fill = 'white', stroke = null, lineWidth = 1 } = {}) {
  ctx.save();
  if (fill) { ctx.fillStyle = fill; ctx.fillRect(x, y, w, h); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.strokeRect(x, y, w, h); }
  ctx.restore();
}

function draw_line({ x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = 'white', lineWidth = 1 } = {}) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function draw_text({ text = '', x = 0, y = 0, font = '16px monospace', fill = 'white', align = 'left' } = {}) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = fill;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function draw_poly({ points = [], fill = 'white', stroke = null, lineWidth = 1 } = {}) {
  if (points.length < 2) return;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lineWidth; ctx.stroke(); }
  ctx.restore();
}

function loop(fn) {
  let last = null;
  function tick(ts) {
    const dt = last ? ts - last : 0;
    last = ts;
    fn(dt);

    prev_frame['md'] = md;
    prev_frame['mx'] = mx;
    prev_frame['my'] = my;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
