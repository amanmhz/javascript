// string
var jkl = '        Hello, Welcome to Nepal ';

//inbuilt methods
//>>length
console.log("#############length ##############");
console.log('leangth of var jkl with white space >>' , jkl.length); // >> .length
console.log('length without whitespace >>', jkl.trim()); // removes white space >> .trim();
console.log('to upper case>> ', jkl.toUpperCase()); // .toUpperCase();
console.log(' lower case >>', jkl.toLowerCase());

//string to array
console.log("#############string to array ##############");
var names = 'aman@dks@bajra@thapa,bks';
console.log('string>>', names);
var arrnames = names.split('@');  //splites after @ in string
console.log('string to array>>', arrnames);
var arr = names.split('.');
console.log('to array ?>',arr);

// console.log('#####example####');
// var time = '21hr23min45sec';

// function calc(time){
//     var hr = time.split('hr');
//     var min = hr[1].split('min');
//    var sec = min[1].split('sec');
//     console.log(hr);
//     console.log(min);
//     console.log(sec);
//     console.log(hr[0],' ', min[0], ' ', sec[0]);
//     var obj= {
//         hour : hr[0],
//         min : min[0],
//         sec : sec[0],
//     }
//      return obj; 
// }

// var res = calc(time);
// console.log('result>>>',res);
// console.log('hour>>', res.hour);
// console.log('second >>', res.sec);

//################################################3
//number
// console.log("#############number###########33");
// var num = 1234.452346;
// var num1 = '1234.452346';
// console.log('interger onlr>>',parseInt(num));
// console.log('fixed floating ..taken 3>>', num.toFixed(3));
// console.log('check number>', isNaN(num));
// console.log(num==num1); // implicit 
// console.log(num===num1); // also checks datatypes

// //boolen
// //truthy or falsey property
// //falsey value >>>> null, 0 , undefined , NaN, false;

// //########################################OBJECT########################
// //collection of key value pair
// //example
// //
menu = {
    name: 'khajaghar',
    address: 'somewhere',
    colddrinks : ['fanta', 'juice','cocacola'],
    khajaset : {
        veg : 'simple set',
        nonveg : ['mutton', 'chicken',{
            buffItem1 : 'fried',
            buffItem2 : 'gravy' 
        }],
    },
    hardDrinks : ['siudhf','vodka']
}

// //convert into arrays
// var keysOnly = Object.keys(menu);
// console.log('keys only >>', keysOnly);

// var valueOnly = Object.values(menu);
// console.log('values only>>', valueOnly);

// // object as an string 
// console.log('before stringify >>', menu);
// var str = JSON.stringify(menu);  //JSON >>> Java Script Object Notation
// console.log('after stringify >>>', str);

// //reverting back to object
//  var objdata = JSON.parse(str); //where str is stringify string.
//  console.log('reverted string to object(parsed data) >>>', objdata);

// //###############################
// //to check the property exist
// //using hasOwnProperty >>inbuilt method
// console.log('property exist >>', menu.hasOwnProperty('hardDrinks'));

// //using in >> inbuilt property
// function chk(item,data){
//     if (item in data){
//         console.log('exist in menu>>', item);
//     }
//     else{
//         console.log('doesnot exist');
//     }
// }
// chk('colddrinks',menu);

//########################## //
//loop
// >> for in loop
//eg
//recommed to use in object
for (var asd in menu){
    console.log('key >>', asd);
    console.log('values >>', menu[asd]);
}