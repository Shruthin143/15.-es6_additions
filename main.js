//var a = 'Test1';
//let b = 'Test2';

/*
function testVar(){
  var a = 30;
  if(true){
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
function testLet(){
  let a = 30;
  if(true){
    let a = 50;
    console.log(a);
  }
  console.log(a);
}
for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(i);
*/

// const colors = [];

// colors.push('red');
// colors.push('blue');

// colors = 'Green';

// console.log(colors);

//================================= Classes and Inheritance ==================================

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     static countUsers(){
//       console.log('there are 50 registered users');
//     }

//     register(){
//         console.log(this.username+' is now registered');
//     }
// }

// let bob = new User('bob', 'bob@gmail.com', 12345)
// bob.register();

// User.countUsers()

// class Members extends User{
//   constructor(username, email, password, memberPackage){
//     super(username, email, password)
//     this.memberPackage = memberPackage
//   }
//   getPackage(){
//     console.log(this.username+ 'is subscribed to ' + this.memberPackage);
//   }
// }

// let mike = new Members('mike', 'mike@gmail.com', 12345, 'wonderful')

// mike.getPackage()

//===============================TEMLATES=================

// let naam = 'John'

// function make(word){

//   return word.toUpperCase()
  
// }

// let template = `<h1>${make
//   ('Hello')}, ${naam}<h1>
//                 <p><h4>This is a simple template in Javascript</h4></p>`

// document.getElementById('template').innerHTML = template;


//================================New strings and New methods
// startsWith()
//endsWith()
//includes()

// let theString = 'Hello, my name is Shr and I am learning Javascript'

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('Hello'));
// console.log(theString.includes('Hello'));

// //Hex
// console.log(0xFF);

// //Binary
// console.log(0101010);

// console.log(Number.isFinite(3));
// console.log(Number.isNaN(3));
// console.log(Number.isInteger(3));

//=========================Default Params and Spread operator

// function newest($new='hello'){
//       console.log($new);
// } 

// newest('ufffu')

// let args=[1,2,3]
// let argt=[1,2,3]


// function testf(){
//   console.log(`${args},${argt}`);
// }
// testf()

//=========================== Set, Map, Weakset and WeakMap

// let myArray = [1,2,3,4,5]
// let mySet = new Set(myArray)


// mySet.add(100)
// // mySet.clear()
// // console.log(mySet.Size)
// console.log(mySet);

// mySet.forEach(function(item){
//   console.log(item);
// })

// let myMap = new Map([['a','Hello'], ['b','bello'],['c','cello']])

// console.log(myMap);


//====Weakset

// let carWeakSet = new WeakSet();

// let car1 = {
//   make: 'Honda',
//   model: 'Civic'
// }

// carWeakSet.add(car1)

// console.log(carWeakSet);

//============ARROW FUNCTIONS======
//==============Promise

// let myPromise = Promise.resolve('Foo')
// myPromise.then((res) => console.log(res));

// let myPromise = new Promise(function(resolve, reject){
//   setTimeout(() => {
//     resolve('hey, fellla how is this turning out')
//   }, 2000);
// })

// myPromise.then((res)=>{
//   res +=' hoping better'
//   console.log(res);
// })

//================Generators

function *g1(){
  console.log('hello');
  yield 'Yield 1 ram'
  console.log('world');
  yield 'Yield 2 ram'
  return 'Returned'
}

let g = g1()

for(let val of g){
  console.log(val);
}