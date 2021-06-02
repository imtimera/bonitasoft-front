export class Utils{
    randomColor() {
        const numb = '0123456789ABCDEF'
        let color: String = '#'
        for (let index = 0; index < 6; index++) {
            color += numb[Math.floor(Math.random() * 16)]
        }
        return color
    }
}