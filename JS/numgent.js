function ranNum()
{
var numbers =[];
while (numbers.length <6){
  var num = Math.floor((Math.random() * 9))
  if (numbers.includes(num) == false){
   numbers.push(num);
  }
}
}