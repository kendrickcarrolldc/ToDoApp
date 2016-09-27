define(["modules/inputValue"], function (inputValues) {
  return function AddNote(titleVal, descriptVal) {
  var note = document.createElement('div');
  note.className = "toDoItem";
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  img2.className = "removeButton";
  img1.className = "editButton";
  img1.src = "images/edit.png";
  img2.src = "images/xbutton.png";
  var noteName = document.createElement('h3');
  var noteDetails = document.createElement('p');
  noteDetails.className = "message";
  var body = document.getElementById('canvas');
  titleVal = document.getElementById('titleInput').value; // put the value of the element within the function
  descriptVal = document.getElementById('descriptInput').value;

  body.appendChild(note).innerHTML = Date();
  note.appendChild(img2);
  note.appendChild(img1);
  note.appendChild(noteName);
  noteName.textContent = titleVal;
  note.appendChild(noteDetails);
  noteDetails.textContent = descriptVal;

  var storedTodos = document.getElementById('canvas').innerHTML;
    localStorage.setItem('toDos', storedTodos);

}


    });
