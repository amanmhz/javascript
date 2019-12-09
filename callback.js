// a function which is passed as an argument to another function
// a function which is used to handle asynchronous result
 
//example
function f1(name){ // name is callback fn & f1 is higher order fn
    console.log('received ', name);
}

// var a = function(){
//     console.log('i m fn');
// }
// f1(a); //a is callback function
//also>> 
f1(function (){
    console.log('i m a function');
})
console.log(' ');
console.log('#####example######');

//async execution with time consuming task



//pheodo code//// example
//prepare a story to buy a gamming laptop

//i want ot buy a laptop
// goto shop
// desired laptop was not found
// shopkeeper told me to come next day

// non blocking task::::
// return home, eat food , something else

// then need to wait for tommorow
// buy a laptop 
// install the software vscode and nodejs
// learn code and play a game

//task part//
// function gotoshop(cbDES){
//     console.log('i m at shop');
//     console.log('shopkeeper told me to come tomorrow');
//     setTimeout(function() {
//         console.log('went to shop after next day');
//         cbDES('DELL'); //calling callback fnction
//         //return 'DELL'; // return will not work in timeconsuming task
//     }, 2500);

// }

// //execution part//
// console.log('i want to buy a gamming laptop');
// console.log('went to the shop');
// gotoshop(function(deslaptop){
//     console.log('if this block execute then i have result form gotoshop funcion');
//     console.log('now i have a laptop');
//     console.log('desired laptop >>', deslaptop);
//     console.log('install softwares and games');
//     console.log('playes games and code'); 
// }); 

// // non blocking task
// console.log('return home');
// console.log('eat food and do something else');


// added something
//prepare a story to buy a gamming laptop

//i want ot buy a laptop
// goto shop
// not enough money to buy desired laptop.
// asked mother to add some money..
// but she told me to wait for a week 
// gave money and goes to shop after a week.

// went to shop again and but 
// currently desired laptop was not found
// shopkeeper told me to come next day

// non blocking task::::
// return home, eat food , something else

// then need to wait for tommorow
// goes to shop
// buy a laptop 
// install the software vscode and nodejs
// learn code and play a game



//taskpart
function buyinglaptop(cbDES){
    console.log(cbDES);
    console.log('i m at shop');
    console.log('not enough money');

  setTimeout(function() {
    console.log('asked money to mother')
    console.log('told me to wait for a week');
    console.log('gave a money after 1 week')
    console.log('goes to shop');
    console.log('no desired laptop found')
    console.log('shopkeeper told me to come tomorrow');

  }, 2000);

    setTimeout(function() {
        console.log('went to shop after next day');
        cbDES('DELL'); //calling callback fnction
        //return 'DELL'; // return will not work in timeconsuming task
    }, 2500);

}

//execution part
console.log('i want to buy a gamming laptop');
console.log('went to the shop');
buyinglaptop(function(deslaptop){
    console.log('if this block execute then i have result form gotoshop funcion');
    console.log('desired laptop >>', deslaptop);
    console.log('now i have a laptop');
    console.log('install softwares and games');
    console.log('playes games and code'); 
}); 



// non blocking task
console.log('return home');
console.log('eat food and do something else');


