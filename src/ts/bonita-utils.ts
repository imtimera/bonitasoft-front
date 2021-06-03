export function randomColor() {
    const r = generateRandomBetween0and255()
    const g = generateRandomBetween0and255()
    const b = generateRandomBetween0and255()
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

export function generateRandomBetween0and255() {
    return Math.random() * 255
}
