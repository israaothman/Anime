// 1- comments 
/* jhjh
jjjhjh
kkk */

// 2- Datatypes 
// 1- String -> text -> "Israa" or 'Israa' or "5"
// 2- Number -> any number 1 5 9 -1 
// 3- Boolean -> true or false


//  3- Variables
var userName;
userName = "Israa";
var myId = 1234;
var test = true;



// 4- How can we see the values
// it's for the developers to test thier code 
// console.log(userName);

// these two ways for the user :
// alert("welcome to our website " + userName)


// document.write("<p style='color:red;'> this is " + userName + " from js </p>")


// 5- operations 
//    *assignment operator 
//   equal = 
// ex : 
var x = 5;


//    *arithmetic operators  
//  + addition 5+1 
//  - sub 5-1 
//  * mul 1*5 
//  / div 5/5
//  % mod  10%3 
//  ++ increment 5++
//  -- decremet 5--
//  ** power off 2^2X  2**2 5^3X 5**3
var y = "5";
//  console.log(5**2);
//  console.log(y++);
//  console.log(y);



//    *comparison operators  
// ==  value only 
// console.log(y == x);
// === value and datatype 
// console.log(y === x);


// !=  value only 
// console.log(y != x);
// !== value and datatype 
// console.log(y !== x);

// <  
// >= 
// > 
// <=

var age = 25;





// * logical operators 
//  1- && And
//  2- || OR
//  3- !  Not



// 6- conditional statement 
// if(condition){
//   if true do this code 
// }else {
//   if false do this code 
// }

// if (userAge <= 25 || userAge >= 30 ) {
//   alert("hello")
// }
//   else{
//   alert("Hi")
// }

// if(condition 1){
//   if true do this code 1
// }else if(condition 2 ) {
//   if true do this code 2
// }else {
//    if both conditions were false do this code 
// }

// if (age <= 25) {
//   for(var i=0; i<5;i++){
//   alert("hello")
//   }
// } else if(age > 25) {
//   alert("Hi")
// }else{
//   alert("welcome")
// }




// var userAge = prompt("Enter your age ? ");
// console.log(userAge);
// userAge == 25 





var a = false;
var b = false;

// console.log(a&&b);







//************ loops ************** */

// 1- for loop 
//  for(initial value ; condition ; update the initial value)
// when you want to repeat your code LIMITED amount of times 

//  for(var i=0 ;i<5;i++){
//    console.log(i)
//    console.log(i<5);
//    document.write("<p style='color:red;'> this is " + userName + " from js </p>")
//  }

//  for( var i=7  ; i>=0  ; i-- ){
//    console.log(i);
//  }


// while loop 
// when we don't know how many times do we want to repeat our code (ex: based on the user input)

// while(condition){
//   code ... 
// }

var favAnime = prompt("whats your fav from : Hunter, one piece, AOT");

// favAnime=AOT

function favAnimeFun() {

  while (favAnime != "Hunter" && favAnime != "one piece" && favAnime != "AOT") {

    favAnime = prompt("please enter on of : Hunter, one piece, AOT");
  }

  document.write("<img src='https://cdn.vox-cdn.com/thumbor/du79s36XcdSLiXDqCzWkIBeV7nU=/0x0:1600x900/1200x800/filters:focal(672x322:928x578)/cdn.vox-cdn.com/uploads/chorus_image/image/66320060/Tanjiro__Demon_Slayer_.0.png'/>")

  if (favAnime == "Hunter" || favAnime == "one piece" || favAnime == "AOT") {
    console.log(favAnime);

  } else {
    favAnime = prompt("please enter on of : Hunter, one piece, AOT");
    console.log(favAnime);

  }


}

favAnimeFun();







var x = prompt("how many times do you want to see a star image ?")

var starsFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output +  "<img src='https://image.shutterstock.com/image-vector/star-icon-vector-classic-rank-260nw-429574270.jpg' />"

   console.log(i,output)

    i++;
  }

  return output;

}


// var result = starsFun();
// document.write(result);








