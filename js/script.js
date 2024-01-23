let secretNumber = Math.floor(Math.random() * 100)
let lives = 20;
let highscore = 0;
let numbers = document.getElementById('box')
let infoElement = document.getElementById('button')
let headerElement = document.getElementById('header')
let headElement = document.getElementById('head')
let livesElement = document.getElementById('lives')
let highscoreElement = document.getElementById('higscore')

for(let i = 0; i<100;i++){
  let span = document.createElement('span')
  span.textContent = i
  numbers.appendChild(span)
} 

let num = numbers.getElementsByTagName('span')
let index = 0


function nextNum () {
  if(!infoElement.classList.contains('redo')){
    num[index].style.display = 'none'
    index = (index + 1) % num.length
    if(index === 0)nextNum()
    num[index].style.display = 'initial'
  }
}

function prevNum () {
  if(!infoElement.classList.contains('redo')){
    num[index].style.display = 'none'
    index = (index - 1+num.length) % num.length
    if(index === 0)prevNum()
    num[index].style.display = 'initial'
  }
}

function success(){
  infoElement.classList.add('success')
  headerElement.classList.add('success')
  headerElement.textContent = 'You did it!'
  headElement.classList.add('success')
  infoElement.textContent = '👉 Again?'
  infoElement.classList.remove('error')
  headerElement.classList.remove('error')
  headElement.classList.remove('error')
  infoElement.classList.add('redo')
}
function error(){
  infoElement.classList.add('error')
  headerElement.classList.add('error')
  headerElement.textContent = 'You didn\'t guess!'
  headElement.classList.add('error')
  infoElement.textContent = 'Again? ↺'
  infoElement.classList.remove('success')
  headerElement.classList.remove('success')
  headElement.classList.remove('success')
  infoElement.classList.add('redo')
}

function check(){
  if(!infoElement.classList.contains('redo')){
  lives--
  livesElement.textContent= `Lives: ${lives}`
  infoElement.classList.add('anim-pulse');
  window.setTimeout(function() {infoElement.classList.remove('anim-pulse')},500)
  }
  
  if(index-1 < secretNumber) infoElement.textContent = 'Too low'
  else if(index-1 > secretNumber) infoElement.textContent = 'Too high'
  else {
    
    highscore < lives ? highscore = lives : ''
    highscoreElement.textContent = `High Score:${highscore}`
    success()
  }
  
  if(lives == 0) error()
}

function again(){
  if(infoElement.classList.contains('redo')){
      
      lives = 20
      livesElement.textContent= `Lives: ${lives}`
      secretNumber = Math.floor(Math.random() * 100)
      infoElement.classList.remove('redo')
      infoElement.classList.remove('success')
      headerElement.classList.remove('success')
      headElement.classList.remove('success')
      infoElement.classList.remove('error')
      headerElement.classList.remove('error')
      headElement.classList.remove('error')
      infoElement.textContent = '?'
      headerElement.textContent = 'Guess my number !'
      
      num[index].style.display = 'none'
      index = 0
      if(index === 0)nextNum()
      num[index].style.display = 'initial'
    }
    
}