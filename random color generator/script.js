function changeColor(){
    var hexElements = ['0', '1' , '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var hexCode = ''
    for (var i=0; i<6; i++){
        var randomHexNumber = Math.floor(Math.random()* hexElements.length);
        hexCode += hexElements[randomHexNumber];
    }

    document.querySelector(".color-code").innerHTML = hexCode;
    document.querySelector("p").style.color = "#" + hexCode;
}