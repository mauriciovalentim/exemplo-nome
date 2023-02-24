canvas = document.querySelector('canvas')
button = document.querySelector('button')

let width = window.innerWidth - (window.innerWidth/100*30)
let height = window.innerHeight - (window.innerHeight/100*30)
canvas.width = width
canvas.height = height

let context = canvas.getContext('2d');

/*context.fillStyle = 'green'
context.fillRect(50, 100, 50, 50)
context.fillStyle = 'purple'
context.fillRect(width - 110, 100, 50, 50)
context.fillStyle = 'yellow'
context.fillRect(100, height - 100, width - 200, 30)

// Line

context.beginPath()
context.moveTo(50, 300)
context.lineTo(300, 100)
context.strokeStyle = 'blue'
context.stroke()
*/
// Arc / Circle


let x = 200
let y = 200
let velocityX = 4
let velocityY = 4
let radius = 30
let anim = true 

button.addEventListener('click', ()=> {stopAnimation()})

function stopAnimation(){
    anim = false
}
function startAnimation(){
    if (anim){
        requestAnimationFrame(startAnimation);

        context.clearRect(0, 0, width, height)

        context.beginPath()
        context.arc(x, y, radius, 0, Math.PI*2, false)
        context.strokeStyle = 'blue'
        context.stroke()
        if (x > width - radius || x < 0 + radius) {
            velocityX = -velocityX
        }
        if (y > height - radius || y < 0 + radius) {
            velocityY = -velocityY
        }
        x += velocityX
        y += velocityY
    }
}

startAnimation()
