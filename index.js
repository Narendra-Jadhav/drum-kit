
//*** Detecting Button(Mouse Click) Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // What to do when click detected

    var buttonInnerHTML = this.innerHTML;
    // the object that made the event listener; this points to that
    // So, we are taking the innerHTML of that, as it will give the key that button has, eg. w, s, etc.

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//*** Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//*** Function to Make Sound
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHTML);
  }
}

//*** Function for button animations
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  // adding class pressed to button

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
  // setTimeout method to decide what should happen after some time
  // time-interval = 100 milliseconds
}
