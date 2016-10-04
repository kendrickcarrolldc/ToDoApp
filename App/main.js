////bootstrap
requirejs(["modules/AddNote", "modules/appearForm", "modules/hideForm"],
function( AddNote, appearForm , hideForm) {

   


// Save functionality
    var save = document.getElementById('save');
      save.addEventListener('click',function(e) {
      e.preventDefault();
				
				  titleVal = document.getElementById('titleInput').value; // put the value of the element within the function
  descriptVal = document.getElementById('descriptInput').value;
      if(save.textContent=="Save") {

        
         AddNote(null, titleVal, descriptVal);
         hideForm();

      }
      else if(save.textContent=="Edit") {
         AddNote(currentNode, titleVal, descriptVal);
         hideForm();
        }
      })

    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', appearForm);

    var body = document.getElementById('canvas'); // parent for notes



    (function init() {
      body.addEventListener('click',actions)
        function actions(e){
          console.log(e.target)

          if(e.target.className=="removeButton"){



            e.target.parentNode.remove();
            var toDoSet = document.getElementById('canvas').innerHTML;
            localStorage.setItem('toDos', toDoSet);
          }
          else if(e.target.className=="editButton"){

            formParent.style.display = 'block';
            formParent.style.position = 'absolute';
            var toDoSet = document.getElementById('canvas').innerHTML;
            localStorage.setItem('toDos', toDoSet);
            save.textContent="Edit";
            currentNode = e.target.parentNode;
            
          }

        }
        var storedTodos =localStorage.getItem('toDos');
        document.getElementById('canvas').innerHTML = storedTodos;
    })();

    });