const exampleText = document.querySelector('.text')

exampleText.innerHTML = 'This is some text in p paragraph'

const button = document.querySelector('.clicker')

// 2) Call addEventListener on the element, set the event type and pass in a function
// that contains the instructions you want to execute when the button gets clicked
button.addEventListener('click', function () {
    const newsletter = document.querySelector('.newsletter')
    if (
    newsletter.classList.toggle('hidden') )
    button.innerHTML = 'Login'
    else
    button.innerHTML = 'Close'
})

const button1 = document.querySelectorAll('button')

function clickRemove () {
    const imageHidden = document.querySelector('.image')
    imageHidden.classList.toggle('hidden')
}

button1.forEach(function (button) {
    button.addEventListener('click', clickRemove)
})