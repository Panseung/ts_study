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

interface InterfaceTest {
  name :string
}
interface InterfaceTest {
  age :number
}

type TypeTest = {
  name :string
}

type TypeTest = {
  age :number
}