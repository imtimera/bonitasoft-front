function initDraw() {
    var canvas = document.getElementById('shape-area')
    var startDraw = false
    var shape = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    }

    function setMousePosition(e) {
        var ev = e || window.event
        if (ev.pageX) {
            shape.x = ev.pageX + window.pageXOffset
            shape.y = ev.pageY + window.pageYOffset
        } else if (ev.clientX) {
            shape.x = ev.clientX + document.body.scrollLeft
            shape.y = ev.clientY + document.body.scrollTop
        }
    }

    var element = null

    canvas.onclick = function (e) {
        startDraw = !startDraw
        if (element !== null) {
            element = null
            canvas.style.cursor = "default"
        } else {
            shape.startX = shape.x
            shape.startY = shape.y
            element = document.createElement('canvas')
            element.className = 'rectangle'
            element.style.position = 'absolute'
            element.style.left = shape.x + 'px'
            element.style.top = shape.y + 'px'
            element.style.backgroundColor = randomColor()
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair"
        }
    }

    canvas.onmousemove = function (e) {
        setMousePosition(e)
        if (element !== null) {
            element.style.width = startDraw==true? Math.abs(shape.x - shape.startX) + 'px': '0px'
            element.style.height = startDraw==true ? Math.abs(shape.y - shape.startY) + 'px': '0px'
            element.style.left = (shape.x - shape.startX < 0) ? shape.x + 'px' : shape.startX + 'px'
            element.style.top = (shape.y - shape.startY < 0) ? shape.y + 'px' : shape.startY + 'px'
        }
    }

}

function randomColor() {
    const numb = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += numb[Math.floor(Math.random() * 16)]
    }
    return color
}


initDraw()