index = 0;

var button1 = document.querySelector(".button1");
var button2 =  document.querySelector(".button2");

function changeBackground(){
    backgroundColors = ["red", "blue", "green", "purple", "black"];
    
    document.querySelector("body").style.background = backgroundColors[index++];
    if (index == backgroundColors.length - 1){
        index = 0;
    }

}

function changeFont(){
    fontColors = ["orange", "grey", "silver", "pink"];

    document.querySelector("body").style.color = fontColors[index++];

    if (index == fontColors.length-1){
        index = 0;
    }


}