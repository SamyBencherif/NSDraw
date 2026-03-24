
class Button {

    constructor({ label, x, y, width, height, color, index }) {
        this.label = label;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.index = index // the number of the note to play
    }

    hovering() {
        return this.x - this.width / 2 <= mx && mx <= this.x + this.width / 2 && this.y - this.height / 2 <= my && my <= this.y + this.height / 2;
    }

    draw() {
        draw_rect({ x: this.x - this.width / 2, y: this.y - this.height / 2, w: this.width, h: this.height, fill: this.color });
        draw_text({ text: this.label, x: this.x, y: this.y, align: "center" });

        if (this.hovering()) {
            draw_rect({ x: this.x - this.width / 2, y: this.y - this.height / 2, w: this.width, h: this.height, fill: "#FFF9" });

            if (mouse_down_this_frame()) {
                playNote(this.index);
            }

        }
    }
}


const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const colors = [];

for (let note of notes)
{
    colors.push(`rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`)
}

const buttons = [];

for (let i = 0; i < notes.length; i++) {
    buttons.push(new Button({ label: notes[i], x: 100 + 50 * i, y: 100, width: 40, height: 40, color: colors[i], index: i }));
}

loop(() => {

    clear({ color: "#664618" });

    for (let button of buttons) {
        button.draw();
    }
})