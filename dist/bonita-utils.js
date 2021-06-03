"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomBetween0and255 = exports.randomColor = void 0;
function randomColor() {
    const r = generateRandomBetween0and255();
    const g = generateRandomBetween0and255();
    const b = generateRandomBetween0and255();
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
exports.randomColor = randomColor;
function generateRandomBetween0and255() {
    return Math.random() * 255;
}
exports.generateRandomBetween0and255 = generateRandomBetween0and255;
//# sourceMappingURL=bonita-utils.js.map