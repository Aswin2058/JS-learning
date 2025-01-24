document.addEventListener("keydown", function(event){
    if(event.key==="Enter"){
        addMessage();
    }
})

function addMessage(){
    var message = document.querySelector("input");
    var inputMessage = message.value.trim();


        // Select the element with the class "message-view"
    const messageView = document.querySelector(".message-view");

    // Create a new <li> element
    const newListItem = document.createElement("li");

    // Add content to the new <li> element
    newListItem.textContent = inputMessage;

    // Append the new <li> to the selected element
    messageView.appendChild(newListItem);
    message.value = '';
}