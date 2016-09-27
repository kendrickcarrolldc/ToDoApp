define(["modules/hideForm","modules/AddNote"], function (hideForm,addnote) {
return function inputValues(){

  save.addEventListener('click',function(e){
    e.preventDefault();

    alert('save is working');
    if(save.textContent=="Save") {
       titleVal = document.getElementById('titleInput').value; // put the value of the element within the function
       descriptVal = document.getElementById('descriptInput').value;
       console.log('hit2');
       AddNote();
       hideForm();

    }
    else if(save.textContent=="Edit"){
      //currentNode

      console.log('hit3');

      save.textContent="Save";
    }
    console.log('hit4');

    })
  }
});
