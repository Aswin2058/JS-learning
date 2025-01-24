var images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10"];
var index = 0;

function forwardInage(){{
    index++;
    var imagePath = "images/" + images[index] + ".JPG";
    document.querySelector(".my-images").src = imagePath;

    if(index === images.length - 1){
        index = 0;
    }
}}

function backwardInage(){
    index--;
    var imagePath = "images/" + images[index] + ".JPG";
    document.querySelector(".my-images").src = imagePath;
    
    if(index<0){
        index = images.length-1;

    }
}