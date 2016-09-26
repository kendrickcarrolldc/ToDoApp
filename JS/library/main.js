////bootstrap
//
// require(['modules/person'], function(person){
//    console.log(person.firstName + " " + person.lastName);
// });
//
// require(['modules/animals'], function(animals){
//    console.log(animals.kind + " are mans best friend");
// });
//
// require(['modules/AddNote'], function AddNote{
//    
// });


document.addEventListener('DOMContentLoaded',function(){

    init();
    inputValues();
});

var titleVal, descriptVal;
var currentNode= "";
var save = document.querySelector("#save");
var body = document.getElementById('canvas'); // parent for notes
var formParent = document.getElementById('formParent');


// var toDoStorage = {
//   get: function (){
//     try {
//       var names = JSON.parse(localStorage.names);
//     }
//     catch(err) {
//       var names = [];
//     }
//     return names;
//
//
//   },
//   write: function(names) {
//     localStorage.names = JSON.stringify(names);
//   }
//
// }
//
// var list = toDoStorage.get();
//
// console.log(list);
//
// for (var key in list) {
//   createRow(key);
//
// }

function init() {
  body.addEventListener('click',actions)
    function actions(e){
      console.log(e.target)
      if(e.target.className=="removeButton") {
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
    // var todoItem2 = {
    //   title: titleVal,
    //   details: descriptVal
    // }
    // list.push(todoItem2);
    // //
    // // toDoStorage.write(list);
    // toDoStorage.write(list);
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
      var todoItem = {
        title: titleVal,
        details: descriptVal,
        img1 : img1,
        img2 : img2,
        note : note,
        notename: noteName,
        notedetails: noteDetails
      }
      list.push(todoItem);
      //
      toDoStorage.write(list);


  }


function createRow(key) {

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


  document.getElementById("form").reset();

}

  function makeNote() {
    console.log('its working');

        if (formParent.style.display = 'none'){
            formParent.style.display = 'block';
            body.style.display = "none";
      }
  }
  function hideForm() {
    if (formParent.style.display = 'block') {
        formParent.style.display = 'none';
        body.style.display = "flex";
      }
  }
