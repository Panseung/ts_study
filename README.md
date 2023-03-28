# ts_study (코딩애플 TS강의 study_repo)



#### #1

JS는 Dynamic Typing 가능 ( 5 - '3' = 2 )

Dynamic Typing(외에도 유연성이 높은 것은)은 프로젝트 사이즈가 커질수록
나중에 유지/보수가 힘들어 질 가능성이 큼

Type Script는 에러메세지 퀄리티가 높다



#### #4

Union Type: 타입 2개 이상 합친 타입
```typescript
let newType :number | string = 'kim'
```

newType이라는 타입을 가진 변수는 number 혹은 string만 가능



any 타입은 해당 변수에 typeScript의 기능을 사용하지 않겠다 선언과 마찬가지

unknown도 any와 유사한 타입이지만 좀 더 안전함
이유는 아래 예시코드

```typescript
let myAny :any
let myName1 :string
myName1 = myAny  // 가능

let myUnknown :unknown
let myName2 :string
myName2 = myUnknown // 불가능

any는 타입이 지정된 다른 변수에도 할당 가능하지만,
unknown는 불가능
```





#### #5 :void

아무것도 return이 없는 함수는 void타입을 사용

실수로 어떤 값을 return 하는 것을 방지



함수에 인자가 선택적으로(옵션) 올 경우

```typescript
function myFunc( x? :number ) :void {
    1 + 1
}
```

이는 x ? x :number : undefined와 마찬가지여서
x가 있을 경우 number타입이 와야 하고 없어도 상관 없으며,
return은 없는 함수



#### #6 type Narrowing

```typescript
function typeTest( x:number | string ) :void {
  if ( typeof x === 'number' ) {
    console.log( x + 1 )
  } else {
    console.log( x + '1' )
  }
}
```

지정된 type이 Union일 경우
type의 case에 따라 처리하는 것을 type Narrowing이라고 함 



narrowing으로 인정해주는 문법

1. typeof 변수

2. 속성명 in object

3. 인스턴스 instanceof 부모

4. assertion ( 알고만 있고, 사용은 안하는게 좋을듯?? 그냥 if문 쓰는게 나을 것 같음 )
   ```typescript
   function typeTest( x:number | string ) :void {
     let array :number[] = []
     array[0] = x as number
   }
   // x를 number 타입으로 변환하여 넣는 것 (number가 union타입 안에 속해서 가능)
   ```

assertion을 알맞게 쓰는 방법( 막 쓰면 사수한테 빠따를 맞음 )

1. type을 a 에서 b로 변경할 때 쓰는 것이 아니라 유니언 타입의 변수를
   하나의 타입으로 확정지어 줄 경우 사용
2. 무슨 타입이 들어올지 100% 확실할 때 쓰는 것 (굳이 쓸 이유가?)





#### #7 readonly

```typescript
type GirlFriend = {
  name :string
}

const myGirl :GirlFriend = {
  name: '김'
}

myGirl.name = '박'

type readGirlFriend = {
  readonly name :string
}

const myReadGirl :readGirlFriend = {
  name: '김'
}

myReadGirl.name = '박'  //에러 -> readonly인 속성을 변경하려고 시도했기 때문
```

실제로 에러가 아님
typeScript에러는 에디터 & 터미널에서만 존재하며 이는 타입과 관련하여
경고를 주기위한 용도의 에러



#### #8 literal types

```typescript
let literalTest :123

literalTest = 123
literalTest = 456 //에러
```

type 뿐 아니라 값 자체를 정함

```typescript
let test : 1 | 2
test = 1
test = 2
test = 3  //에러
```

위와 같이 들어올 수 있는 값들을 미리 정해줄 수 있는 장점

```typescript
const helloOrBye = function( x :'hello' | 'bye' ) :string {
  return x
}
```

x로 'hello' 또는 'bye' 만 가능

const의 한계는 한가지 값만 반드시 들어가야 하는 반면에,
Literal type은 들어갈 수 있는 값을 1개 이상 정할 수 있음





#### #14 type vs interface

```typescript
interface Student {
  name :string
}

interface Teacher {
  name :string
  age :number
}

interface Teacher2 extends Student {
  age :number
}


let 학생 :Student = { name :'kim' }
let 선생님 :Teacher = { name: 'kim', age: 20 }
let 선생님2 :Teacher2 = { name: 'kim', age: 20 }


type Animal = { name :string }
type Cat = { age :number } & Animal  // intersection기능
```

interface는 extends 기능을 사용 가능

type 도 &연산자로 같은 기능을 사용할 수는 있음

( extends는 속성명이 중복되면 에러로 잡아주는 반면,
 &로 속성을 합친 경우에는 속성명이 중복되어도 잡아주지 않음 )

그럼 interface와 type 에는 무슨 차이가 있나?

##### 차이점: interface(중복선언 가능) vs type(중복선언 불가능)

```typescript
interface InterfaceTest {
  name :string
}
interface InterfaceTest {
  age :number
}
// 위와 같이 중복 가능

type TypeTest = {
  name :string
}

type TypeTest = {
  age :number
}
// type은 불가능
```

따라서 interface가 커스텀을 하기에 좀 더 용이함 ( 더 유연함 )
