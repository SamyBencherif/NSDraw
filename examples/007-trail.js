// Compare this with the previous program. What's different?
loop(() => {
    clear({color: "#B8DDDE11"});
    draw_rect({x: mx-20, y: my-20, w: 40, h: 40, fill: "#F54227"})
})

// Don't just look at the code. Run it and examine the visual difference.

// How did we get such a cool effect by barely changing the code?
// You'll find this happens a lot in graphics programming.
// Lots of discoveries lie behind little changes and sometimes happen by accident!

// Let's explain what's going on.

// You'll see the color code is longer than usual. Let's take a moment to understand
// how color codes work. A hex color code is broken in to 3 or 4 parts.
// red, green, blue, and optionally "alpha".

// Each part is written in hex number system. It's a system of numbers that uses the
// letters A through F in order to store a little extra information and be easily
// converted to binary. hex, also known as hexadecimal, is a programmer's best friend!

// Consult this table to see how this number system works. I'll list decimal, our familiar
// counting system alongside it. I'll even include binary system for fun. The key is that
// these different counting systems use a different amount of numerals. Binary has two numerals,
// 0 and 1. Decimal has ten, 0, 1, 2, ..., 9. Hexadecimal has sixteen! 0, 1, 2, ..., 9, A, B, C, 
// D, E, and F.

// DECIMAL |  HEX   |  BINARY         DECIMAL |  HEX   |  BINARY          DECIMAL |  HEX   |  BINARY
// --------+--------+----------       --------+--------+----------        --------+--------+----------
//       0 |  0x00  |        0             33 |  0x21  |   100001              66 |  0x42  |  1000010
//       1 |  0x01  |        1             34 |  0x22  |   100010              67 |  0x43  |  1000011
//       2 |  0x02  |       10             35 |  0x23  |   100011              68 |  0x44  |  1000100
//       3 |  0x03  |       11             36 |  0x24  |   100100              69 |  0x45  |  1000101
//       4 |  0x04  |      100             37 |  0x25  |   100101              70 |  0x46  |  1000110
//       5 |  0x05  |      101             38 |  0x26  |   100110              71 |  0x47  |  1000111
//       6 |  0x06  |      110             39 |  0x27  |   100111              72 |  0x48  |  1001000
//       7 |  0x07  |      111             40 |  0x28  |   101000              73 |  0x49  |  1001001
//       8 |  0x08  |     1000             41 |  0x29  |   101001              74 |  0x4A  |  1001010
//       9 |  0x09  |     1001             42 |  0x2A  |   101010              75 |  0x4B  |  1001011
//      10 |  0x0A  |     1010             43 |  0x2B  |   101011              76 |  0x4C  |  1001100
//      11 |  0x0B  |     1011             44 |  0x2C  |   101100              77 |  0x4D  |  1001101
//      12 |  0x0C  |     1100             45 |  0x2D  |   101101              78 |  0x4E  |  1001110
//      13 |  0x0D  |     1101             46 |  0x2E  |   101110              79 |  0x4F  |  1001111
//      14 |  0x0E  |     1110             47 |  0x2F  |   101111              80 |  0x50  |  1010000
//      15 |  0x0F  |     1111             48 |  0x30  |   110000              81 |  0x51  |  1010001
//      16 |  0x10  |    10000             49 |  0x31  |   110001              82 |  0x52  |  1010010
//      17 |  0x11  |    10001             50 |  0x32  |   110010              83 |  0x53  |  1010011
//      18 |  0x12  |    10010             51 |  0x33  |   110011              84 |  0x54  |  1010100
//      19 |  0x13  |    10011             52 |  0x34  |   110100              85 |  0x55  |  1010101
//      20 |  0x14  |    10100             53 |  0x35  |   110101              86 |  0x56  |  1010110
//      21 |  0x15  |    10101             54 |  0x36  |   110110              87 |  0x57  |  1010111
//      22 |  0x16  |    10110             55 |  0x37  |   110111              88 |  0x58  |  1011000
//      23 |  0x17  |    10111             56 |  0x38  |   111000              89 |  0x59  |  1011001
//      24 |  0x18  |    11000             57 |  0x39  |   111001              90 |  0x5A  |  1011010
//      25 |  0x19  |    11001             58 |  0x3A  |   111010              91 |  0x5B  |  1011011
//      26 |  0x1A  |    11010             59 |  0x3B  |   111011              92 |  0x5C  |  1011100
//      27 |  0x1B  |    11011             60 |  0x3C  |   111100              93 |  0x5D  |  1011101
//      28 |  0x1C  |    11100             61 |  0x3D  |   111101              94 |  0x5E  |  1011110
//      29 |  0x1D  |    11101             62 |  0x3E  |   111110              95 |  0x5F  |  1011111
//      30 |  0x1E  |    11110             63 |  0x3F  |   111111              96 |  0x60  |  1100000
//      31 |  0x1F  |    11111             64 |  0x40  |  1000000              97 |  0x61  |  1100001
//      32 |  0x20  |   100000             65 |  0x41  |  1000001              98 |  0x62  |  1100010

// I've listed the first 98 numbers, which fit conveniently in this table.
// We can see for example that decimal 32 converts to hex 0x20 (We write 
// "0x" or "#" to denote that a number is in hex.)

// Using two digits of hex, like we do in hex color codes, we can get values
// up to 255, which is represented as 0xFF. (It is 11111111 in binary.)

// So we can examine the hex color #FFFFFF.
// It's using three components, each one written with two characters.

// The first two are the red component.
// #FFFFFF
//  ^^

// The next two are the blue component.
// #FFFFFF
//    ^^

// The third pair make up the green component.
// #FFFFFF
//      ^^

// These values are maxed out at 0xFF (255).

// What happens when you fully mix red, green, and blue?

// Hint: try going back to the 001-hello-world.js program
// and enter the color: "#FFFFFF" and run it to see what happens.

// Hint 2: We're talking about mixing light from a screen as opposed
// to mixing paint or pigment.

// Once you understand #FFFFFF and even #000000 you'll 
// start to see the pattern.

// Try different combinations. I'll go ahead and tell you what
// the colors are. Think about how the red, green, and blue
// channels are mixing.
// #FF0000 = red
// #00FF00 = green
// #0000FF = blue
// #FFFF00 = yellow
// #00FFFF = cyan
// #FF00FF = magenta

// Now let's revisit this special four part hex code, which has 
// alpha. #B8DDDE11"

// Alpha means transparency. So we have a value of 0x11, which is
// less than 0xFF, so the color is pretty transparent.

// What's happening is that every new frame doesn't fully clear
// out the previous frame, so we get a pretty trail left behind.