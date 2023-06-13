/*

  https://ts-ast-viewer.com/
  코드의 가독성은 상대적이다.

  문자 a, b, c ...
  토큰 괄호, 공백 const ...
*/

const MAX_COUNT = 100;

function double(a) {
  if(a > MAX_COUNT){
    return a;
  }else {
    return a * 2
  }
}

double(15)



// 프로그래밍에서의 추상화란?
const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const multiply = (a,b) => a * b;
const div = (a,b) => a / b;

add(add(add(add(3, 10),100),200),300)
// 3 + 10 + 100 + 200 + 300 => 가독성이 떨어진다. 추상화 되어있지 않다.

sub(multiply(add(3, 10), 100), 5);
// 3 + 10 * 100 - 5


const double1 = a => multiply(a, 2)
const double2 = a => add(a, a)
const quater = a => div(a, 4)

quater(12)
div(12, 4)




// javascript 변화 과정

// (가변인자 처리 기법)
function foo(){
  for(let i = 0; i < arguments.length; i++){
    arguments[i]
  }
}

function Foo(...agrs){
  for(let i = 0; i < agrs.length; i++){
    agrs[i]
  }
}


// 배열 & 객체 합치기
const arr = [1, 2, 3, 4]
const newArr = arr.concat([5,6,7,8])
const NewArr = [...arr, 5,6,7,8]   // 👍

const obj = {
  a: 1,
  b: 2
}

Object.assign({}, obj, {a:10, c: 3, d:4})

const Obj = {...obj, a: 10, c: 3, d:4}  // 👍

function Baz(){
  this.name = 'baz'
}

Baz.prototype.getName = function(){
return this.name
}

const baz = new Baz;
baz.getName();


class Baz{
  constructor(){
    this.name = 'baz'
  }

  getName(){
    return this.name
  }
}

function makeObject(){
  let save = true;

  return {
    setSave: function(s){
      save = s
    }
  }
}


const mo = makeObject();
mo.setSave(true);


class MakeObject{
  #save;

  constructor(){
    this.#save = true;
  }

  setSave(s){
    this.#save = s;
  }
}

const MO = new MakeObject()
MO.setSave(false);