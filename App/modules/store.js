define ( function () {
    function add(key,obj){
      //conection to the localStorage to save a new one
      var jsonObj=JSON.stringify(obj)
      localStorage.setItem(key,jsonObj)
    }
    function deleteNote(){
      //conection to the localStorage to delete
    }
    function getAll(){
      //conection to the localStorage to get all notes
      var notes=[]
      for( key in localStorage){
        notes.push(JSON.parse( localStorage[key]));
      }
      return notes
    }
    function edit(){
      //conection to the localStorage to edit a note
    }
    return{
      add:add,
      edit:edit,
      getAll:getAll,
      deleteNote:deleteNote
    }

})
