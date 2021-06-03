import { randomColor } from './utils.js';

function initDraw() {
    var canvas = document.getElementById('shape-area')
    var drawing = false
    var rotation = false
    var tabItemToRotate = []
    var tabItemToRemove = []
    var index = 0
    const shapeArea = 'shape-area'
    const rectangle = 'rectangle'
    const px = 'px'

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
            shape.x = ev.clientX //+ document.body.scrollLeft
            shape.y = ev.clientY //+ document.body.scrollTop
        }
    }


    canvas.onmousedown = function (event) {
        var e = event || window.event
        if (e.target && e.target.id == shapeArea) {
            index++
            drawing = true
            shape.startX = shape.x
            shape.startY = shape.y
            const attributeName = rectangle + index
            element = document.createElement('canvas')
            element.className = attributeName
            element.id = attributeName
            element.style.position = 'absolute'
            element.style.left = shape.x + px
            element.style.top = shape.y + px
            element.style.width = '0px'
            element.style.height = '0px'
            element.style.border = '1px solid'
            element.style.backgroundColor = randomColor()
            element.style.cursor = "pointer"
            element.style.opacity = '1';
            element.addEventListener("dblclick",
                function (e) {
                    const item = e.target
                    const duration = '5s'
                    const timeOut = '5000'
                    tabItemToRotate.push(item.id)
                    tabItemToRemove.push(item)
                    const rotationAngle = 'rotate(360deg)'
                    var promise = new Promise(resolve => setTimeout(function () {
                        item.style.WebkitTransitionDuration = duration
                        item.style.webkitTransform = rotationAngle
                        tabItemToRotate.splice(tabItemToRotate.indexOf(item))
                        resolve(true)
                    }, timeOut))
                    promise.then((value) => {
                        if (tabItemToRotate.length == 0) {
                            tabItemToRemove.forEach(function (rect) {
                                rect.style.opacity = '0'
                                setTimeout(function () {
                                    rect.remove()
                                }, timeOut)
                            });
                        }
                    });

                })
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair"

        }
    }

    canvas.onmousemove = function (e) {
        setMousePosition(e)
        if (drawing) {
            element.style.width = Math.abs(shape.x - shape.startX) + px
            element.style.height = Math.abs(shape.y - shape.startY) + px
            element.style.left = (shape.x - shape.startX < 0) ? shape.x + px : shape.startX + px
            element.style.top = (shape.y - shape.startY < 0) ? shape.y + px : shape.startY + px

        }
    }
    canvas.onmouseup = function () {
        drawing = false

    }

}




initDraw()