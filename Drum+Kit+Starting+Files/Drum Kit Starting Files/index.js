// document.querySelectorAll(".set button")[0].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[1].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[2].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[3].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[4].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[5].addEventListener("click", function(){
//     alert("I got Clicked");
// });
// document.querySelectorAll(".set button")[6].addEventListener("click", function(){
//     alert("I got Clicked");
// });

// for (var i=0; i<=6; i++){

//     if (i==0){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/tom-1.mp3');
//             audio.play();
//             this.style.color = 'white'
//         });
//     } else if(i==1){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/tom-2.mp3');
//             audio.play();
//         });
//     } else if (i==2){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/tom-3.mp3');
//             audio.play();
//         });
//     } else if (i==3){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/tom-4.mp3');
//             audio.play();
//         });
//     } else if (i==4){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/crash.mp3');
//             audio.play();
//         });
//     } else if (i==5){
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/kick-bass.mp3');
//             audio.play();
//         });
//     } else{
//         document.querySelectorAll(".set button")[i].addEventListener("click", function(){
//             var audio = new Audio('sounds/snare.mp3');
//             audio.play();
//         });
//     }
// }

// var noOfButtons = document.querySelectorAll(".drum").length;

// for (var i=0; i<noOfButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//         var buttonInnerHtml = this.innerHTML;
//         makeSound(buttonInnerHtml);
//         buttonAnimation(buttonInnerHtml);
//     }
//  );
// }

// document.addEventListener("keypress", function(event){
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });

// function makeSound(key){
//     switch (key) {
//         case "w":
//             var audio1 = new Audio('sounds/tom-1.mp3');
//             audio1.play();
//             break;
//         case "a":
//             var audio2 = new Audio('sounds/tom-2.mp3');
//             audio2.play();
//             break;
//         case "s":
//             var audio3 = new Audio('sounds/tom-3.mp3');
//             audio3.play();
//             break;
//         case "d":
//             var audio4 = new Audio('sounds/tom-4.mp3');
//             audio4.play();
//             break;
//         case "j":
//             var audio5 = new Audio('sounds/crash.mp3');
//             audio5.play();
//             break;
//         case "k":
//             var audio6 = new Audio('sounds/kick-bass.mp3');
//             audio6.play();
//             break;
//         case "l":
//             var audio = new Audio('sounds/snare.mp3');
//             audio.play();
//             break;
//         default:
//             break;
//     }
// }

// function buttonAnimation(currentKey){
//     var activeButton = document.querySelector("." + currentKey);
//     activeButton.classList.add("pressed");
//     setTimeout(function(){
//         activeButton.classList.remove("pressed");
//     }, 100);
// }

var noOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<noOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

       soundPlayer(buttonInnerHTML);
       buttonAnimations(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event){
    soundPlayer(event.key);
    buttonAnimations(event.key);
});

function soundPlayer(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;    
        default:
            break;
    }
}

function buttonAnimations(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
        }, 100);
}