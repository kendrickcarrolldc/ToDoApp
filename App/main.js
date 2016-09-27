////bootstrap
requirejs(["helper/util", "AddNote", "inputValue", "appearForm", "init", "hideForm","store"], function(util, addNote,inputValues, appearForm,init ,hideForm,store ) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    //store.add(obj)

    alert('hit');
    init();
    inputValues();
    var save = document.getElementById('save');
    save.addEventListener('click',addNote);
    var titleVal, descriptVal;
    var currentNode= "";
    var body = document.getElementById('canvas'); // parent for notes
    var formParent = document.getElementById('formParent');
});
