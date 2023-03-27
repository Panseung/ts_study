let myName :string = 'kim';
// 형식에는 string, number, boolean, null, undefined, bigint, [], {} 등

let myArr :string[] 
// myArr은 string만 가질 수 있는 array

let myObj :{ name? :string }
// myObj는 name이라는 키에 string타입의 value만 가질 수 있는데 뒤에 물음표를 통해
// name이란 속성이 필수로 있어야 하는 것이 아니라 옵션으로 올 수 있음을 뜻함

let myTest :string | number = 'kim'
// unionType: string 혹은 number 타입을 가지는 myTest

type MyType = string | number  // custom type도 지정 가능, 일반 변수와 구분을 위해 대문자 시작
let myTypeTest :MyType

function myFunc( x :number ) :number {  // 함수 인자에 타입 지정 가능 number 타입의 x를 받아서 number 타입을 리턴함
  return x * 2
}

type Member = [number, boolean]
let john :Member = [ 123, true ]

type MemberObj = {
  name :string
}

let kim :MemberObj = { name: 'kim' }