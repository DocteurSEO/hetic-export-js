
function addElement (elementHTML, className, parent, color) {
    const div = document.createElement(elementHTML)
    div.className = className
    div.style.backgroundColor = color || getRandomColor()
    document.querySelector(parent).appendChild(div)
    
}





function getRandomColor (){
    const color = ['red', 'yellow', 'pink', 'green', 'blue', 'black']
    const randomIndex = Math.floor(Math.random()*color.length)
    return color[randomIndex]
}



export {addElement}