let numbers=[2,5,7,8]
let oddNumber = numbers.find(getfirstOdd)
console.log("Number is "+oddNumber)
let oddNumberIndex = numbers.findIndex(getfirstOdd)
console.log("Index of Number is "+(oddNumberIndex+1))
function getfirstOdd(num){
    return num%2!=0
}