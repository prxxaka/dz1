const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const phoneRegExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/
phoneCheck.addEventListener('click', () => {
    if (phoneRegExp.test(phoneInput.value)){
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    }else {
        phoneResult.innerText = 'NOT OK'
        phoneResult.style.color = 'red'
    }
})


const box = document.querySelector('.box')
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX <= 450 && positionY <= 0) {
        positionX+=1
        box.style.left = `${positionX}px`
        setTimeout(move, 2)
    }
}
move()