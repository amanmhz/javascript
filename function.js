console.log('######function########')

//expression syntax used variable as funciton
//declarative syntax..  normally janeko

var exfn = function() //eg of expression syntax
{
    console.log('this is expression function');
}

decl_fn();
function decl_fn()
{
    console.log('hello from declaratiove function');
}
decl_fn()
//### hoisting --- is mechanism to move all the declaration at the top before execution

//funciton types
/*
function with arguments>>> function asd(a); 
function with return types
function with arguments and return types
IIFE function (immediately invoked funcional expression)
name function 
unnamed funcion(anynymous function)// 
*/

//function with arguments

// function fn(asd){
// console.log(asd);
// }
// fn('passed argument');
// fn(123);

// function with multile arguments
function fn1(name, add, num){
   console.log('name is  :', name + ' address :' + add);
}
fn1('sushant', '  mulpani ', 123);

//passing object
function fn2(any){
    console.log( 'name is ', any.name + '  address is' + any.add)
}
var details_obj .com/*
embedded on https://docs.google.com/*
https://drive.google.com/*
embedded on https://drive.google.com/*
*://mail.google.com/mail*
embedded on *://mail.google.com/mail*
https://www.facebook.com:443
https://www.youtube.com:443
= {
add: 'khokana',
num: 1234,
name: 'aman'
}

fn2(details_obj);

//function with return type
function fnret(b){
    var a = b+2;
    console.log(b);
    return a;
    a=a+1;   // will not execute after return
    console.log (a);
}
var retvar= fnret(5);
console.log(retvar);


//IIFE function >immediately invoked function expression
console.log('####IIFE function#####');
//syntax: (fn)();

(function a (){
    console.log('hello from IIFE fn which is not called in outside fn');
})()