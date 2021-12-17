let numbers= [1,2,3,4]
let newArray= numbers.map(myFunction)
console.log("Old Array :" +numbers)
console.log("New Array after Map Method "+newArray)

function myFunction(num){
    return num*2;
}

