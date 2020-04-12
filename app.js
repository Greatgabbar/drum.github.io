window.addEventListener('keydown',function(e){
  const key=document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const kel=document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(key===null)
  return;
  kel.className+=' playing';
  key.currentTime=0;
   key.play();
  //  this.setTimeout(function(){
  //    kel.className='key';
  //  },70);
});

const keys=document.querySelectorAll('.key');
keys.forEach((key)=>{
  key.addEventListener('transitionend',removeTransition);
})

function removeTransition(e){
  // console.log(e)
  if(e.propertyName!=='transform')
  return;
  this.classList.remove('playing');
}

