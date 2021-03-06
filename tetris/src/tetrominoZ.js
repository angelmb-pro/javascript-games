import Tetromino from "./tetromino.js";

export default class TetrominoZ extends Tetromino {

    constructor() {
        super();
        this.shape = [
            [0, 1, this.gridWidth+1, this.gridWidth + 2],
            [1, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth],
            [0, 1, this.gridWidth+1, this.gridWidth + 2],
            [1, this.gridWidth, this.gridWidth + 1, 2 * this.gridWidth],
        ];
    }
}