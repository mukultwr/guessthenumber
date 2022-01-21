'use strict';
//Dom manipulation
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='CORRECT NUMBER';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=25;
// console.log(document.querySelector('.guess').value);
const secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;

document.querySelector('.number').textContent=secretnumber;
document.querySelector('.check').addEventListener('click',function(){
  const guess= Number( document.querySelector('.guess').value);
  console.log(guess);
  if(!guess){
    document.querySelector('.message').textContent='NO NUMBER';
  }
  else if(guess === secretnumber){
    document.querySelector('.message').textContent='CORRECT NUMBER';
  }
  else if(guess > secretnumber){
      document.querySelector('.message').textContent=' Too High!';
      score=score-1;
      document.querySelector('.score').textContent=score;
  }
  else if(guess < secretnumber){
    document.querySelector('.message').textContent=' Too Low!';
    score=score-1;
      document.querySelector('.score').textContent=score;
}
});
