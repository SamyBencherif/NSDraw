
//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

loop(() => {
    
    clear({color: "#B8DDDE"});

    draw_rect({x: mx-50, y: my-50, w: 100, h: 100, fill: `rgb(${mx}, 100, 100)`});

    if (mouse_down_this_frame())
    {
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease("C4", "8n");
    }
})