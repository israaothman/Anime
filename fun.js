// function decleration 

console.log(add(1,1));

function add(x,y){
  var result = x+y;
  return result;
}

var result2 = add(3,5);
  document.write("<p style='color:red;'> "+ result2+ "</p>")


// function expression

console.log(add(1,1));

  var sub = function(x,y){
    var result = x-y;
    return result; 
  } 
// console.log(sub(9,3));



var firstNum = 10;
var secondNum = 5 ;

var addOutput= add(firstNum,secondNum);
var subOutput = sub(firstNum,secondNum);
console.log(addOutput,subOutput);

