// By the way, hex codes can be shortened to 3 characters.
// This has the same meaning as #777777.
clear({color: "#777"});

// You can put for-loops in for-loops.
// This is called nesting.
for (let x=0; x<256; x++)
{
    for (let y=0; y<256; y++)
    {
        // This line of code will be run 256*256=65536 times!
        draw_rect({x: x, y: y, w: 1, h: 1, fill: rgb(x,0,0)});
        // Try changing rgb(x,0,0) to rgb(x,y,0)
    }
}

// This is a function definition.
// We can make our own functions too!
// This one converts 3 numbers into one
// color string using rgb() format.
function rgb(r,g,b)
{
    return `rgb(${r}, ${g}, ${b})`;
}