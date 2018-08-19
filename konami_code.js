const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
 let index=0
 function init(){
   document.body.addEventListener('keydown',function(e){console.log('Listening'+e.key)
     keydown(e)
   })
 }
 function keydown(e){
   console.log('Listening inside func'+e.key)
  const key=e.key
  if (key===codes[index]){
    index++
    console.log(index+' this is number correct these many times'+'total length = '+codes.length)
    if (index===codes.length){
      window.alert("hurray");
      document.write("hi success");
      console.log('mission complete')
      index=0
      console.log('index now '+index)
    
    
      
    }
  }
  else {
    index=0

 }
 }