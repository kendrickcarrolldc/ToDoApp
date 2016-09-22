//bootstrap

require(['modules/person'], function(person){
    console.log(person.firstName + " " + person.lastName);
});

require(['modules/animals'], function(animals){
    console.log(animals.kind + " are mans best friend");
});


