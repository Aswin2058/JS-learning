const input = document.querySelector("#text");

function addNote() {
    const noteRoot = document.querySelector(".notes-here");

    // Create a new <li> element
    const addLi = document.createElement('li');
    addLi.textContent = input.value;

    // Add click event to cross out the note
    addLi.addEventListener('click', function () {
        addLi.classList.toggle("crossed");
    });

    // Append the new <li> to the <ul>
    noteRoot.appendChild(addLi);

    // Clear the input field
    input.value = '';
};