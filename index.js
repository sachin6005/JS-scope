// Local and Global variables

var fatherAge = 55 // global variable

function ageDiff1() {
  var son1Age = 20 // local variable
  return console.log(fatherAge - son1Age) 
}
ageDiff1()

function ageDiff2() {
  var son2Age = 15 // lacal variable
  return console.log(fatherAge - son2Age) 
}
ageDiff2()

function ageDiff3() {
  var son3Age = 20 // lacal variable
  return console.log(fatherAge - son3Age) 
}
ageDiff3()

var num1 = 22 // global variable

function sum() {
  var num2 = 11 // local variable
  console.log(num1 + num2)
}
sum()

function diff() {
  var num2 = 11 // local variable
  console.log(num1 - num2)
}
diff()

function mul() {
  var num2 = 11 // local variable
  console.log(num1 * num2)
}
mul()

function div() {
  var num2 = 11 // local variable
  console.log(num1 / num2)
}
div()
