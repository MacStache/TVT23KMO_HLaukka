import { Rectangle } from "./rectangle.js";

export class Square extends Rectangle {
    constructor(x, y, side, _lineWidth = 1, _color = 'black') {
        super(x, y, side, side, _lineWidth, _color);
    }
}