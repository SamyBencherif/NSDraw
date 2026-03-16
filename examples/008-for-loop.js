// I'm about to introduce a powerful tool.

clear({color: "#209a9e"});

for (let i=0; i<3; i++)
{
    draw_rect({x: 10+25*i, y: 10+25*i, w: 20, h: 20, fill: "#35badb"});
    draw_text({text: i+1, x: 10+25*i+5, y: 10+25*i+15, fill: 'white'});      
}

// This is a for-loop. It lets you repeat a
// line of code several times.

// The above example makes 3 squares.
// Change it to be 7 squares.

// Here's how the for-loop works.

// #### 1 INITIALIZATION ####
// for (let i=0; i<3; i++)
//      ^^^^^^^
// We create a temporary variable called
// "i" and store in it a value of zero.
// We could have named this variable
// anything, but "i" is a common choice
// in for-loops.

// #### 2 EXIT CONDITION ####
// for (let i=0; i<3; i++)
//               ^^^
// So long as this condition is
// true, we'll keep running the
// code in the body of the 
// for-loop.

// #### 3 ITERATION ####
// for (let i=0; i<3; i++)
//                    ^^^
// After each time we run the
// code, we'll also run this
// iteration step. Here it says
// to increase "i" by one.