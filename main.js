import {addElement} from './function.js'

document.querySelector('button')
.addEventListener('click', function(){
    const color = document.querySelector('input').value || null
    
    addElement('div', 'square', 'body', color)
})






