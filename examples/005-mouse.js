// Let's look at another way to add
// motion.

loop(() => {
    clear({color: "#B8DDDE"});
    draw_rect({x: mx-50, y: my-50, w: 100, h: 100, fill: "#F54227"})
})

// Run the program to see what
// happens)

// NSDraw comes with some special
// variables. We used some of them
// in previous programs.

// W = width of the screen in pixels
// H = height of the screen in pixels
// mx = x position of the mouse
// my = y position of the mouse

// I subtract 50 from both
// coordinates to make the square
// centered around the mouse. The x
// and y coordinates specify the
// top-left of the square.
