//Javascript task 1


var output = function isOldEnoughToDrink (age){
    if (age>= 18) {
        console.log('true');
        
      } else {
        console.log('false');
      }
     
  }
    output(age);



//Javascript task 2

 var output = function isOldEnoughToDrinkAndDrive(age){
    if (age>=21){
        console.log(true);
    }else{
        console.log(false);
    }
  }
   output(age);


  //Javascript task 3 

var obj = {key:  'value'};
 function getProperty(obj, key){
    if ( obj[key] = true){
     return obj;
    // return obj[key];
}else{
    return undefined;
}
}
var output = getProperty(obj, 'key') ;
console.log(output);


//Javascript task 4


function addProperty(obj, key){
  obj[key] = true;
    return obj;

}

//Javascript task 5
var obj = {
    age: 45
  };

  function isPersonOldEnoughToDrinkAndDrive(person){
      if (person>= 18){
      return true;
      }else{
          return false;

      }
  }
  var output = isPersonOldEnoughToDrinkAndDrive(obj);
  console.log(output);

//Javascript task 6


var output = function computeAverageLengthOfWords(code, programs) {
 
    return (code.length+programs.length)/2;
}
console.log(output);

  

