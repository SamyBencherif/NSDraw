// Compare this with the previous
// program. What's different?
loop(() => {
    clear({color: "#B8DDDE11"});
    draw_rect({x: mx-20, y: my-20, w: 40, h: 40, fill: "#F54227"})
})

// Don't just look at the code. Run
// it and examine the visual
// difference.

// How did we get such a cool effect
// by barely changing the code?
// You'll find this happens a lot in
// graphics programming. Lots of
// discoveries lie behind little
// changes and sometimes happen by
// accident!

// Let's explain what's going on.

// The color code is longer than
// usual. A hex color code is broken
// into 3 or 4 parts:
// red, green, blue, and optionally
// "alpha".

// Each part is written in hex. It's
// a number system that uses the
// letters A through F in order to
// store extra information and be
// easily converted to binary. Hex,
// also known as hexadecimal, is a
// programmer's best friend!

// Here's how the systems compare.
// Binary has two numerals: 0 and 1.
// Decimal has ten: 0–9.
// Hexadecimal has sixteen: 0–9,
// A, B, C, D, E, F.

// DECIMAL | HEX  | BINARY
// --------+------+--------
//       0 | 0x00 |       0
//       1 | 0x01 |       1
//       2 | 0x02 |      10
//       3 | 0x03 |      11
//       4 | 0x04 |     100
//       5 | 0x05 |     101
//       6 | 0x06 |     110
//       7 | 0x07 |     111
//       8 | 0x08 |    1000
//       9 | 0x09 |    1001
//      10 | 0x0A |    1010
//      11 | 0x0B |    1011
//      12 | 0x0C |    1100
//      13 | 0x0D |    1101
//      14 | 0x0E |    1110
//      15 | 0x0F |    1111
//      16 | 0x10 |   10000
//      32 | 0x20 |  100000
//      64 | 0x40 | 1000000
//     255 | 0xFF | 11111111

// We write "0x" or "#" to indicate
// that a number is in hex.

// Using two hex digits we can
// represent values up to 255 (0xFF).

// So let's examine #FFFFFF.
// It has three components, each
// written with two characters.

// The first pair is red.
// #FFFFFF
//  ^^

// The second pair is green.
// #FFFFFF
//    ^^

// The third pair is blue.
// #FFFFFF
//      ^^

// All are maxed out at 0xFF (255).

// What happens when you fully mix
// red, green, and blue light?

// Hint: try color: "#FFFFFF" in
// 001-hello-world.js and run it.

// Hint 2: We're talking about mixing
// light from a screen, not paint.

// Once you understand #FFFFFF and
// #000000 you'll see the pattern.

// Try different combinations:
// #FF0000 = red
// #00FF00 = green
// #0000FF = blue
// #FFFF00 = yellow
// #00FFFF = cyan
// #FF00FF = magenta

// Now let's revisit the four-part
// hex code, which has alpha.
// #B8DDDE11

// Alpha means transparency. 0x11 is
// much less than 0xFF, so the color
// is very transparent.

// What's happening is that every
// frame doesn't fully clear the
// previous one, so we get a
// pretty fading trail.
