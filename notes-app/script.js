let button_id = document.getElementById("addNote");
let notes_container = document.getElementById("notes-container");

button_id.addEventListener("click", () => {
    //when click on Save creates a new note
    let note_text = document.getElementById("newNote-text").value;

    const note = document.createElement('li');
    note.classList.add('note-element');

    note.innerHTML = `<p>${note_text}</p>`

    notes_container.appendChild(note);

    //resets the text area
    document.getElementById("newNote-text").value = "";
})

