let myAny :any
let myUnknown :unknown

let myName1 :string
let myName2 :string
myName1 = myAny
// myName2 = myUnknown

let myType :string | number = '1'
let myString :string = '1'
let myNumber :number = 1

myType += 1
myString += 1
myNumber += 1

console.log( myType )
console.log( myString )
console.log( myNumber )