const open = document.getElementById('button')
const closed = document.getElementById( 'header')

open.onclick = function(){
links.style.display = 'flex'
button.style.backgroundColor = 'var(--Light-Grayish-Blue)'
}

closed.onclick = function(){
    links.style.display ='none'
    button.style.backgroundColor = 'white'
}
