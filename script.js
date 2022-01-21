'use strict';
//Dom manipulation
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='CORRECT NUMBER';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=25;
// console.log(document.querySelector('.guess').value);
let secretnumber=Math.trunc(Math.random()*20)+1;
let score=20;


document.querySelector('.check').addEventListener('click',function()
{
  const guess= Number( document.querySelector('.guess').value);
  console.log(guess);
  if(!guess){
    document.querySelector('.message').textContent='NO NUMBER';
  }
  else if(guess === secretnumber){
    document.querySelector('.message').textContent='CORRECT NUMBER';
    document.querySelector('.number').textContent=secretnumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('number').style.width='30rem';
  }
  else if(guess > secretnumber){
      if(score>1){
      document.querySelector('.message').textContent=' Too High!';
      score=score-1;
      document.querySelector('.score').textContent=score;
      }
      else{
        document.querySelector('.message').textContent=' Lost:(';
        document.querySelector('.score').textContent=0;
      }
  }
  else if(guess < secretnumber){
      if(score>1){
    document.querySelector('.message').textContent=' Too Low!';
    score=score-1;
      document.querySelector('.score').textContent=score;
      }
      else{
        document.querySelector('.message').textContent=' Lost:(';
      }
}
});

document.querySelector('.again').addEventListener('click',function(){
    
    let secretnumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=20;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

})
