

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

loop(() => {
    
    clear({color: "#B8DDDE"});

    for (let i=0; i<notes.length; i++)
    {
        draw_rect({x: 110*i, y: 100, w: 100, h: 100, fill: `rgb(${i}, 100, 100)`});
        draw_text({text: notes[i], x:110*i+50, y:100+50});
    }

    if (mouse_down_this_frame())
    {
        playNote(~~(mx/110));
    }
})