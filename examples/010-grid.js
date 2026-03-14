// Color Grid — static drawing

// Not annotated yet. Check back
// later!

const COLS = 20;
const ROWS = 14;
const cellW = W / COLS;
const cellH = H / ROWS;

clear({ color: '#0a0a0a' });

for (let row = 0; row < ROWS; row++) {
  for (let col = 0; col < COLS; col++) {
    const hue = (col / COLS) * 360;
    const light = 30 + (row / ROWS) * 50;
    draw_rect({
      x: col * cellW,
      y: row * cellH,
      w: cellW - 2,
      h: cellH - 2,
      fill: `hsl(${hue}, 80%, ${light}%)`,
    });
  }
}

draw_text({
  text: 'NSDraw',
  x: W / 2,
  y: H / 2,
  font: `bold ${Math.floor(cellH * 1.5)}px monospace`,
  fill: 'rgba(255,255,255,0.9)',
  align: 'center',
});
