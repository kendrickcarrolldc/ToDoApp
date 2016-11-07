define(function () {
	return function AddNote(element, titleVal, descriptVal) {
		var note = document.createElement('div');

		if (element)
			note = element;


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
	


		if (!element)
			body.appendChild(note);
		note.innerHTML = Date();
		note.appendChild(img2);
		note.appendChild(img1);
		note.appendChild(noteName);
		noteName.textContent = titleVal.value;
		note.appendChild(noteDetails);
		noteDetails.textContent = descriptVal.value;

		var storedTodos = document.getElementById('canvas').innerHTML;
		localStorage.setItem('toDos', storedTodos);

	}


});
