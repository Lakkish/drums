var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var instrument= this.innerHTML;
  makesound(instrument);
  buttonanimation(instrument);
  
 });
 

}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonanimation(event.key);
});

function makesound(key){
  
switch (key) {
  case "w":
  var crash=new Audio("sounds/crash.mp3");
  crash.play();
  break;
  case "a":
  var kick=new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;
  case "s":
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "d":
  var tom1=new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;
  case "j":
  var audio=new Audio("sounds/tom-2.mp3");
  audio.play();
  break;
  case "k":
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();
  break;
  case "l":
  var audio=new Audio("sounds/tom-4.mp3");
  audio.play();
  break;
  default:
  break;

}

}

function buttonanimation(key)
{
  var button=document.querySelector("." + key);
  button.classlist.add("pressed");

}