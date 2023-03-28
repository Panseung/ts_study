let literalTest :123

literalTest = 123
literalTest = 456


let test : 1 | 2
test = 1
test = 2
test = 3

const helloOrBye = function( x :'hello' | 'bye' ) :string {
  return x
}

type rsp = '가위' | '바위' | '보'
const rsp = function ( x :rsp ) :rsp[] {
  let myArr :rsp[] = []
  myArr.push( x )
  return myArr
}