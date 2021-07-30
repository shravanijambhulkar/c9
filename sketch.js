

var a = prompt('Enter the first variable: ');
var b = prompt("Enter the second variable: ");

function setup(){
  var b2 = createButton("click here to Swap");
 b2.mousePressed(swap)
  }


function draw()
{
}
function swap(){
  [a,b]=[b,a]
  console.log("the first variable is"+a)
  console.log("the second variable is"+b)
}