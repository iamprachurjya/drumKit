var numberOfDrumItem = document.querySelectorAll(".drum").length;
var audio = new Audio("sounds/tom-1.mp3");

// Detect click from mouse over the button
for(i = 0; i < numberOfDrumItem; i++){

  document.querySelectorAll("button")[i].addEventListener("click", function(){
    // key = this.innerHTML;
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// detect key press from keyboard
  document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
})
// function which will play the sound according to key or button pressed
function playSound(key){
    // key = this.innerHTML;
    switch (key) {
      case 'w':
        audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case 'a':
        audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case 's':
        audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case 'd':
        audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case 'j':
        audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
      case 'k':
        audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 'l':
        audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
    }
  }
// function to add animation on the pressed key or button
  function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
      activeKey.classList.remove("pressed");
    }, 100);
  }
