define(["hideForm","AddNote"], function (hideForm,secondArg) {
return function inputValues(){

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
}
