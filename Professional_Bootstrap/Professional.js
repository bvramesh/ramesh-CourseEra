(function(w){

  function Person(text){
    this.text = text;
  };

  Person.prototype.capify = function (str) {
      var characters = [];
      for(var i = 0; i < str.length; i++){
        characters.push(str.charAt(i).toUpperCase());
      }
      return characters;
  };

var name = prompt("enter name")
  var personOne = new Person(name);
  var changedContent = personOne.capify(personOne.text);
  // console.log(changedContent);
alert(changedContent);
})(window);
