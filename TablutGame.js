import Board from './Board';

class TablutGame {
    constructor(container, config) {
        this.container = container;
        this.config = config || {};

        this.board = new Board();
        this.board.appendTo(this.container);

        this.createFields();
        this.createPieces();
    }

    createFields() { 
        for (let row = 0; row < 7; row += 1) {
            for (let col = 0; col < 7; col += 1) {
                const field = this.createField(row, col);
                this.el.appendChild(field);
            }
        }
    }

    clear() {
        this.container.innerHTML = '';
    }
}

export default TablutGame;