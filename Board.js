import Piece from './Piece';

class Board {
    constructor() {
        this.el = document.createElement('div');
        this.el.className = 'tablut-board';
        
        this.fieldsByNum = {};

        this.initalize();
    }

    initalize() {
    }

    createField(row, col) {
        const el = document.createElement('div');
        el.className = 'tablut-field';

        const dark = Boolean((row + col) % 2);
        if (dark) {
            el.className += ` tablut-field-dark`;
        } else {
            el.className += ` tablut-field-light`;
        }
        
        const num = row * 7 + col;
        el.setAttribute('data-num', num);
        this.fieldsByNum[num] = el;

        return el;
    }

    // fillWithPieces() {
    //     for (let i = 0; i < 3; i += 1) {
    //         const piece = New Piece();
    //         const field = this.fieldsByNum[num];
    //     }
    // }
    appendTo(container) {
        container.appendChild(this.el)
    }
}

export default Board;