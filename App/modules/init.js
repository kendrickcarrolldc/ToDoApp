define ("init", function() {
  return function init() {
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
})
