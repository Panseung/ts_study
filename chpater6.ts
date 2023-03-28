function typeTest( x:number | string ) :void {
  if ( typeof x === 'number' ) {
    console.log( x + 1 )
  } else {
    console.log( x + '1' )
  }
}


function typeTest2( x:number | string ) :void {
  let array :number[] = []
  array[0] = x as number
}
// x를 number 타입으로 변환하여 넣는 것 (number가 union타입 안에 속해서 가능)