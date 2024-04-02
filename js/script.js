
const link = document.createElement('a')
const loged = document.querySelector('.loged')
const button = document.querySelector('#btn')
link.appendChild(button)
loged.appendChild(link)
function verificar(){
    const inpt = document.querySelector('#inpt')
    if (!validateEmail(inpt.value)){
        const error = document.querySelector('#required')
        error.style.display = 'inline-block'
        inpt.style.border = '1px hsl(4, 100%, 67%) solid'
        inpt.style.backgroundColor = '#ffe7e4'
        inpt.style.color = 'red'
    } else {
        link.setAttribute('href', 'pag/index.html')
    }
}   

function validateEmail(email){
    const re = /\S+@\S+\.\S+/
    return re.test(email)   
}

