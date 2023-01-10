// function x() {
//     const a =10;
// }
// var xyz = 30;
// x(); //functional execution context is created
// //expressinn is that evaluate something or execute something
// var x = function () {
//     console.log ("I am an anonymous function")

// }
// console.log(this);
// const obj ={
//     fn:function(){
//         console.log(this);// it refer to obj
//     },
//     fn2:()=>{
//         console.log(this)// it refers to parent window object
//     }
// }



// obj.fn();// obj
// obj.fn2();//window

// function x() {
//   console.log(this);
//   function y() {
//     console.log(this);
//     function z() {
//       console.log(this);// this depend where you are
//     }                   // this (function )depend how you called
//     z();
//   }
//   y();
// }
// x();



const person ={
    name:"Akshay",
    print:function(){
        console.log(this);
    }
};
const person2 ={
    name:"simron",
};

// function x(){
//     console.log(this);
// }
// x();
// x.call(this);//x();= x.call(this);
// x.call(person);
// x.call(person2);
person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);