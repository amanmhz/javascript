arry = ['asd','123','apple','banana','mango','pineapple','apple','shyau','apple','ehat','sdig','shit','hello','ohooo'];

console.log('array >>',arry);
// // to find the index>> arry.indexOf('mango')
// console.log('first index of apple >>', arry.indexOf('apple'));
// console.log('last index of apple >>', arry.lastIndexOf('apple'));
// console.log('index of dfg >>>',  arry.indexOf('dfg')); // not available >> -1;
// console.log('lenght>>', arry.length);

// // adding items/elements into array

// console.log('array previous>>', arry);
// arry.unshift('avogado'); // adding at 1st 
// arry.push('grape');     // adding at last
// console.log('arry after >>', arry);

// //remove from arrays
// //at 1st , at last , betn somewhere

// console.log('arrays >>', arry);
// var removedItem = arry.shift(); //shifting removing 1s item;
// console.log('arrays >>', arry);
// console.log('removed item >>', removedItem);

// console.log('array previous>>', arry);
// var removedItem = arry.pop();  //removing last item
// console.log('arry after>> ', arry);
// console.log('removed item >>', removedItem);

// //some where between
// // splice >>>>= is a method to add and remove items in an array
// //eg to remove
// console.log('before splice>>', arry);
// var indexOfpineapple = arry.indexOf('pineapple');
//  console.log('index of pineapple >>', indexOfpineapple);
// // arry.splice(indexOfpineapple, 1); // removes pineapple along with 4 items // put >>1 to remove only one of that index.
// // console.log('after splice >>', arry);

// arry.splice(indexOfpineapple, 0, 'omg');  // will add 'omg' item at the (indexOfpineapple)
// // arry.splice((indexOfpineapple+1), 0, 'addedfruit'); //will add 'addedfruit' item at the (indexOfpineapple+1)
//  console.log('after added >> ',arry );
// 1st argument>> index i.e no
// 2nd argument>> to remove (no of items i.e no)
// 3rd argument>> to add items

// //array to string 
// console.log('arry >>', arry);
// console.log('array to string >> ', arry.toString());
// console.log('array to string >>', arry.join('@'));
// console.log('arry ot string << ', arry.join(' '));
// console.log('arrary to str>>',arry.join(''));

// //slice
// console.log('sub array ', arry.slice(3)); //will remove upto index
// console.log('subarray>>', arry.slice(3,6)); //as just crop 1st index and 2nd index
// console.log('subarray >> ', arry.slice(arry.indexOf('123'),arry.indexOf('mango')));

//loop
//>for loop
//>for each
//>filter
//>map
//>reduce
//>some , every
//>for in (not recomd)

// console.log('length>',arry.length);
// for(var i=0; i<arry.length; i++){
//     console.log('at index ',i,' >> ' , arry[i]);
// }

//foreachloop
// arry.forEach(function(item,index){
//     console.log('item is >>', item , '<< & at index > ',index);
// })



 
