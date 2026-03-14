// This project is called NSDraw.
// So let's make a drawing app.
// This can be done using a clever
// trick in this simple program.
clear({color: "#B8DDDE"});
loop(() => {
    draw_rect({x: mx-20, y: my-20, w: 40, h: 40, fill: "#F54227"})
})

// Explanation:

// We clear the background outside of
// the loop. So the screen is set to
// #B8DDDE, which is a light blue.

// Then we draw a square at the mouse
// position continuously, every frame,
// in #F54227, an orange color.

// This leaves behind a trail and
// makes for a drawing program!
