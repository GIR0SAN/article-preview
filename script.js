const button = document.getElementById('button')
const modal = document.getElementById('links')
const closed = document.getElementById( 'header')

button.onclick = function(){
links.style.display = 'flex'
}

closed.onclick = function(){
    links.style.display ='none'
}