let size = 20
const ballon = document.querySelector('p')
ballon.style.fontSize = `${size}px`
window.addEventListener("keydown", blowBalloon)

function blowBalloon(e) {
    if(e.key === 'ArrowUp'){
        size *= 1.1 
        if(size >= 80) {
            ballon.textContent = '💥'
            removeEvent()
        }
        ballon.style.fontSize = `${size}px`
    }
    if(e.key === 'ArrowDown'){
        size *= 0.9 
        ballon.style.fontSize = `${size}px`
    }
}