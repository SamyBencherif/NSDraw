// Let's jump into an exciting topic. Loops!

// This is how we add motion into our programs.
// I'll also introduce variables here, since that's 
// needed to keep track of moving objects.

// Let's create a variable to keep track of x position
let x_position = 0;

// x_position is the name the variable. We could have chosen anything.
// 0 is the value we are storing in the variable.

// This is similar to the concept of keys and values in objects.

// Don't worry about this syntax too much for now.
// Just know that this section of code will be repeated
// over and over.
loop(() => {

    // This is our drawing logic, using familiar functions.
    clear({color: "#B8DDDE"});
    draw_rect({x: x_position, y: 0, w: 100, h: 100, fill: "#F54227"})

    // Here I will do some magic to make the motion work.
    x_position++; x_position%=W;
})

// Now I'll explain the "magic" part of the code.
// x_position++; takes the value stored in x_position and increases it by one.
// The value when we first create the variable was 0.
// Then after the first frame we increment it to 1
// Then 2
// Then 3
// and so on.

// I put two expressions on the same line, separated by a semicolon (;).
// People will tell you not to do that in programming, because it's hard to read,
// but we're just having fun here. So we can do whatever we want.

// The second part x_position%=W; means that whenever x_position is greater than W,
// which is the width of the screen in pixels, then we reset it back to zero.

// If you watch the program for long enough, you will see the square move to the
// right edge of the screen, and then reset back to the left edge. Super useful!