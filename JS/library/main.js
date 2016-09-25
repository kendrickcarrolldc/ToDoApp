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

var titleVal, descriptVal;
var currentNode= "";
var save = document.querySelector("#save");
var body = document.getElementById('canvas'); // parent for notes
var formParent = document.getElementById('formParent');
var toDoStorage = {
  get: function (){
    try {
      var names = JSON.parse(localStorage.names);
    }
    catch(err) {
      var names = [];
    }
    return names;


  },
  write: function(names) {
    localStorage.names = JSON.stringify(names);
  }

}

var list = toDoStorage.get();

function init() {
  body.addEventListener('click',actions)
    function actions(e){
      console.log(e.target)
      if(e.target.className=="removeButton"){
          console.log("remove button was clicked"); // Testing event delegation
        e.target.parentNode.remove();
      }else if(e.target.className=="editButton"){
        console.log("editButton was clicked"); // Testing event delegation
        formParent.style.display = 'block';
        formParent.style.position = 'absolute';
        save.textContent="Edit";
        currentNode = e.target.parentNode;
        currentNode = e.target.parentNode.style.display = 'none';

      }

    }
    console.log("I am a test");
    addNote()




}

function inputValues(){

  save.addEventListener('click',function(e){
    e.preventDefault();

    console.log('hitt',save);
    if(save.textContent=="Save") {
       titleVal = document.getElementById('titleInput').value; // put the value of the element within the function
       descriptVal = document.getElementById('descriptInput').value;
       console.log('hit2');
       addNote(titleVal, descriptVal);
       hideForm();

    }
    else if(save.textContent=="Edit"){
      //currentNode

      console.log('hit3');

      save.textContent="Save";
    }
    console.log('hit4');
    var todoItem = {
      title: titleVal,
      details: descriptVal
    }
    list.push(todoItem);
    alert('Hit')

    toDoStorage.write(list);
  })
}

  function addNote(titleVal, descriptVal) {
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

      body.appendChild(note).innerHTML = Date();
      note.appendChild(img2);
      note.appendChild(img1);
      note.appendChild(noteName);
      noteName.textContent = titleVal;
      note.appendChild(noteDetails);
      noteDetails.textContent = descriptVal;







    // img2.addEventListener('click', deleteNote);
    // img1.addEventListener('click', editNote);

    //   // e.target.nodeName;
    //   note.remove();
    // })
    // hideForm(); // function to hide from after saving
    // note.appendChild(img);
//     function deleteNote() {
//       note.remove();
//     }
// // Edit Note function
//     function editNote(){
//         formParent.style.display = 'block';
//       //  var editBtn = document.createElement('button');
//         //editBtn.id = 'edit';
//         //formParent.button.id = 'edit';
//
//       // if (formParent.button.id = 'save');
//       //   formParent.button.id = 'edit';
//     }
  }

  function makeNote() {
    console.log('its working');

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
