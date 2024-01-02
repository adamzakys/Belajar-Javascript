document.title = 'anjay'

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const body = document.body

const defaultText = 'klik ini 1'
btn1.textContent = defaultText


btn1.style.border = 'none'
btn1.style.padding = '10px'
btn1.style.backgroundColor = 'salmon'

btn2.style.border = 'none'
btn2.style.padding = '10px'
btn2.style.backgroundColor = 'gray'


function clickButton() {
    btn1.style.backgroundColor = 'red'
    const newText = document.createElement = 'hallooo bung'
    body.append(newText)
}
function ubahText() {
    btn1.textContent = 'terubah'
}
function oriText() {
    btn1.textContent = defaultText
}


const namaSaya = document.createElement('h1')

function clickButton2() {
    namaSaya.innerHTML = 'Adam Zaky' // bisa pakai tag html
    body.append(namaSaya)
}
function ubahWarna() {
    namaSaya.style.color = 'green'
}