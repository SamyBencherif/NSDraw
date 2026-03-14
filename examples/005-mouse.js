// Let's look at another way to add motion
loop(() => {
    clear({color: "#B8DDDE"});
    draw_rect({x: mx-50, y: my-50, w: 100, h: 100, fill: "#F54227"})
})

// Run the program to see what happens !

// NSDraw -- the environment we're coding in, which was invented specifically for this website,
// comes with some special variables. We used some of them in previous programs.

// W is the width of the screen in pixels
// H is the height of the screen in pixels
// mx is the x position of the mouse
// my is the y position of the mouse

// I subtract 50 from both coordinates to make the square centered around the mouse.
// the x and y coordinates given specify the top-left of the square or rectangle.