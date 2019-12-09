//data type property
//###### MUTABLE PROPERTIES #######
/*>> immutabke properties >>  premitive datatype
are properties of datatype where 
if original value is changed it is not reflected to Reference 
*/ 
var va = 'asd';
var va_1 = va; //refrence value of va;
va_1 = 123;


//mutable property /// array and object
//changes in object, array.
/* 
if original value is changed it is reflected to refrence
if refrence value is changed , it is reflected to original
*/

var ar1 = ['apple', 'banana', 'mango'];
var ar2 = ar1;

//ar2 = ['pineapple' , 'something'];
ar2[0] = 'sdfghj';
console.log(ar1);
console.log(ar2);


var obj1 ={
    a1: 'radish',
    a2: 'cauliflower',
    a3: 'mula'
}
var obj2=obj1;

obj2.a1 = 'vanta';
//but
console.log(obj1);
console.log(obj2);


//##################
function sendmail(receivert, msgbody){
    msgbody.title='java';
}
var list = ['aman', 'asd', 'sdf'];
var msg = { 
    sub: 'asdasd',
    text: 'asd',
    aaa: 'asdf'
}

console.log('msg outside >>>', msg);
sendmail(list,msg);
console.log('msg now>> ', msg); 