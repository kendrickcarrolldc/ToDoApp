////bootstrap
//
//require(['modules/person'], function(person){
//    console.log(person.firstName + " " + person.lastName);
//});
//
//require(['modules/animals'], function(animals){
//    console.log(animals.kind + " are mans best friend");
//});


document.addEventListener('DOMContentLoaded',function(){
    init();
    inputValues();
});

function init() {
    console.log("I am a test");
}

function inputValues(){
  var save = document.getElementById('save');
  save.addEventListener('click',function(e){
    e.preventDefault();
    var titleVal = document.getElementById('titleInput').value; // put the value of the element within the function
    var descriptVal = document.getElementById('descriptInput').value;
    console.log("Im working");
    console.log(titleVal);
    console.log(descriptVal);
    addNote(titleVal, descriptVal);
    hideForm();

  })
}

  function addNote(titleVal, descriptVal) {
    var body = document.getElementById('canvas'); // parent for notes
    var note = document.createElement('div');
    note.className = "toDoItem";
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
    img1.className = "removeButton";
    img2.className = "editButton";
    img1.src = "images/edit.png";
    img2.src = "images/xbutton.png";
    var noteName = document.createElement('h3');
    var noteDetails = document.createElement('p')
    noteDetails.className = "message";

    body.appendChild(note);
    note.appendChild(img2);
    note.appendChild(img1);
    note.appendChild(noteName);
    noteName.textContent = titleVal;
    note.appendChild(noteDetails);
    noteDetails.textContent = descriptVal;



    img2.addEventListener('click', deleteNote);
    //   // e.target.nodeName;
    //   note.remove();
    // })
    // hideForm(); // function to hide from after saving
    // note.appendChild(img);
    function deleteNote() {
      note.remove();
    }

  }

  function makeNote() {
    console.log('its working');
      var formParent = document.getElementById('formParent');
    //  var formChild = document.createElement('form');
    //    formChild.id = "form";
    //    formParent.id = "formParent";
        if (formParent.style.display = 'none'){
            formParent.style.display = 'block';
      }
  }
  function hideForm() {
    if (formParent.style.display = 'block') {
        formParent.style.display = 'none';
      }
  }





















// var save = document.getElementById('save'); // When selecting an element by Id use .value
//     save.addEventListener('click', function(e){
//
//         var val = document.getElementById('titleInput').value;
//         if (val)
//
//             e.preventDefault(); // this is the method to prevent events regular behaviour
//
//     });
//
//     var addIt = function(text) {
//         var item = document.createElement('div');
//         item.setAttribute('id', 'toDoItem')
//
//
//     };
//
