"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bonita_utils_1 = require("../bonita-utils");
test('random color containts always rgb', () => {
    expect(bonita_utils_1.randomColor()).toContain('rgb');
});
test('RGB values in random color will always greater than 0', () => {
    expect(bonita_utils_1.generateRandomBetween0and255()).toBeGreaterThan(0);
});
test('RGB values in random color will always less or equals than than 255', () => {
    expect(bonita_utils_1.generateRandomBetween0and255()).toBeLessThanOrEqual(255);
});
//# sourceMappingURL=bonita-utils.test.js.map