
// Congrats on making it this far :D
// Let's celebrate with some fireworks!

let SPARK_COUNT = 10;
let COLORS = ['red', 'blue', 'green', 'purple', 'orange', 'white'];
let SPARKCOLORS = ['#ffbbbb', 'lightblue', 'lightgreen', '#ffbbff', '#ffffbb', 'gray'];

let fireworks = [];
let sparks = [];

loop(()=>{

    // background of gray
    clear({color: '#22222222'});

    // when I first click the mouse add a firework
    if (mouse_down_this_frame())
    {
        let c = Math.floor(COLORS.length*Math.random());
        fireworks.push({x:mx, y:my, vy:-20, color: COLORS[c], sparkColor: SPARKCOLORS[c]});
    }

    // for all the fireworks, run the physics process
    for (let firework of fireworks)
    {
        firework.y += firework.vy;
        firework.vy += .4;
        
        if (firework.vy > 0)
        {
            firework.deleteMe = true;
            
            for (let i=0; i<SPARK_COUNT; i++)
            {
              sparks.push({x:firework.x, y:firework.y, vx:Math.random()*10-5, vy:-10*Math.random(), color: firework.sparkColor});
            }
        }
    }

    // for all the fireworks, run the drawing process
    for (let firework of fireworks)
    {
        draw_circle({x: firework.x, y: firework.y, r: 10, fill: firework.color});
    }

    // for all the sparks, run the drawing and physics process
    for (let spark of sparks)
    {
        draw_circle({x: spark.x, y: spark.y, r: 5, fill: spark.color});
        
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vy += .4;
    }
    
    // for each firework, run the deletion process
    for (let f=fireworks.length-1; f>-1; f--)
    {
      if (fireworks[f].deleteMe) fireworks.splice(f, 1);
    }
})

// These fireworks are triggered by the mouse.
// As a challenge, can you make them trigger 
// automatically?