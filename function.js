function addElement(htmlElement,classNames, parent) {
    const element = document.createElement(htmlElement)
    element.className = classNames
    element.style.backgroundColor = changeColor(); 
    document.querySelector(parent).appendChild(element)
}

function changeColor(){
    const color = ['blue', 'red', 'yellow', 'pink', 'green', 'black']
    const randomNum = Math.floor(Math.random() * color.length);
    return color[randomNum]
}




export {  addElement}

