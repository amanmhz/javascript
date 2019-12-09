///example:: 
//task ///to arrange unique item at an array and to find counts of an item at object.

//items in string saperated by comma ,

var str = 'Apple,Plum,Apricot,Blueberry,Plum,Banana,Pineapple,Plum,Apple,Apple,Sapota,Banana,Water-chestnut,Pear,Starfruit,Naseberry,Tamarind,Papaya,Water-melon,Sweetlime,Raisins,Pomegranate,Peach,Orange,Guava,Jackfruit,Mulberry,Mango,Lemon,Lychee,BlackCurrant,Blackberry,Blueberry,Banana,Blueberry,Grapes,CustardApple,Grapes,Banana,Fig,Blueberry,Gooseberry,Grapes,Grapes'
//var fruits = ['Apple','Plum','Apricot','Blueberry','Plum','Banana','Pineapple','Plum','Apple','Apple','Sapota','Banana','Water-chestnut','Pear','Starfruit','Naseberry','Tamarind','Papaya','Water-melon','Sweetlime','Raisins','Pomegranate','Peach','Orange','Guava','Jackfruit','Mulberry','Mango','Lemon','Lychee','BlackCurrant','Blackberry','Blueberry','Banana','Blueberry','Grapes','CustardApple','Grapes','Banana','Fig','Blueberry','Gooseberry','Grapes','Grapes'];
//var fruits = ['apple','banana','apple','plum','banana','mango','apple','banana','apple','plum','banana','mango']

function strToArr(data){
    var ar = data.split(','); //changing string to array.
    return ar;
}

//console.log('array >>', fruits);
//fruits.splice(3,1);
var fruits = strToArr(str);
console.log('array >>', fruits);
console.log('length',fruits.length);

// //using for loop
// function arrangeInObj(data){
//     obj = {};
//     for (var i=0;i<data.length;i++){
//         var c = 0;
//         for(var j=0;j<data.length;j++){
//                 if(data[i]==fruits[j]){ 
//                     c++;                  
//                 }
//             }
//             obj[data[i]] = c;
//             }
//             return obj;
// }

// function arrangeInArray(data){
//     var obj = arrangeInObj(data);
//     return (Object.keys(obj));
// }


// console.log('arranged in obj >> ',arrangeInObj(fruits));
// console.log('arranged in array >>',arrangeInArray(fruits));

// function uniquData(data){
//    // var c=0;
//     var obj = {
//     };
//     for (var i=0;i<data.length;i++){
//         var c = 1;
//         for(var j=0;j<data.length;j++){
//             if(i!=j){
//                 if(data[i]==fruits[j]){
//                     fruits.splice(j,1); 
//                     c++;                  
//                 }
//             }
//             }
//             obj[data[i]] = c;
//     }
//     return (asd = [obj,data]);
// }

// using foreach method //
function arrangeInObj(data){
    var  obj = {};
    data.forEach(function(item,index){
        var c = 0;
        data.forEach(function(item2,i2){
            if (item == item2){
                c++;
            }
        });
        obj[item] = c;
    });
    return obj;
}
console.log('arrange in obj >', arrangeInObj(fruits));

//another method using for each method

function uniqueArray(data){
    var emptyarr=[];
    data.forEach(function(item,i){
        if(emptyarr.indexOf(item) == -1){
            emptyarr.push(item);
        }
    });
    return emptyarr;
}

console.log('unique array >>>',uniqueArray(fruits));

function count1(data){
    count={};
    data.forEach(function(item){

        // if (count[item]){
        //     count[item] = count[item] +1;
        // }
        // else {
        //     count[item] =1;
        // }
        //or

       // count[item] = (count[item] || 0 ) + 1;
       //or

       count[item] = count[item] ? count[item]+1 : 1; 
    });
 return count;   
}

console.log('count >>',count1(fruits));

// //using filter method

// function arrangeInObj(data){
//     //var obj = {};
//     var filearr = data.filter(function(item,index){
//         {
//             var c =0;
//             data.filter(function(item2,index2){
//                 if (index != index2){
//                     if(item == item2)
//                     {
//                     c++ + 1;
//                     data.splice(index2,1);
//                     }
//                 }
//             });
//             return item;
//         }
//     });
//     return filearr;
// }

// console.log('new array >>', arrangeInObj(fruits));
