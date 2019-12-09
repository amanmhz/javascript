
var laptop = [{
    model : 'dell',
    colour : 'grey',
    gen : 'i5',
    price : 3450
},
{
    model : 'hp',
    colour : 'black',
    gen : 'i7',
    price : 30450
},
{
    model : 'lenovo',
    colour : 'white',
    gen : 'i3',
    price : 400
},
{
    model : 'macbook',
    colour : 'purple',
    gen : 'i5',
    price : 200
},
{
    model : 'samsung',
    colour : 'black',
    gen : 'i7',
    price : 100
}];

console.log('laptops >>', laptop);

laptop.forEach(function(item, i){
    console.log('item is >>', item);
    item.status = 'available'; // added in object.

})

console.log('laptops now >>', laptop);

// var i7laptops = [];
// // i7laptops.length = 0; // to empty array.
// // i7laptops.length = 2; // only 0 and 1 index of array will be available
// laptop.forEach(function(item,index){
//     if(item.gen == 'i7'){
//         i7laptops.push(item);
//     }
// });

//or ///////////////////////////////////////////////////////////
//using filter loop method.
var i7laptops = laptop.filter(function(item,i){
    if (item.gen == 'i7'){
        return item;
        // or return true;
    }
});

var i3laptops = laptop.filter(function(item,index){
    if (item.gen == 'i3'){
        return true;
    }
});
console.log('i7 laptops >>', i7laptops);
console.log('i3 laptops >>',i3laptops);

var blackcolouredi7 = i7laptops.filter(function(item,index){
    if(item.colour == 'black'){
        return true;
    }
});

console.log('blacked coloured i7>>>', blackcolouredi7);

var minPriceBlacki7 = blackcolouredi7.filter(function(item,index){
    if(item.price <= 1000){   
        return true;
    }
});

console.log('min price blacked coloured i7 >', minPriceBlacki7);

///////////////////////////////////////////////////////////////
//using map loop method..
// will be easy if map is used to change the original source. 

laptop.map(function(item,index){
    if (item.gen == 'i7' && item.price <= 200 && item.colour=='black'){
        item.status = 'booked';
    }
})

//changing status to sold

laptop.map(function(item){
    if(item.status == 'booked'){
        item.status = 'sold';
    }
})

//removing sold item from array
laptop.forEach(function(item,index){
    if(item.status == 'sold'){
        laptop.splice(index,1);
    }
})
console.log('laptops >>', laptop);

var num = [2,3,5,6,6]; 
var squarenum = num.map(function(item){  ////unable to change/modify the source 'num' because of immutable property so assign to new var
    return  (item * item);
});

console.log('square num >>',squarenum);
console.log('num>',num);

/////////////////////////////////////
//reduce  method
console.log('################### reduce method ###############')
var number = [1,2,3,4,5,6,7,8,9,10,0];
//syntax
//number.reduce(function(accumulator,item,index,previousValue))
var sum = number.reduce(function(acc,item){
    console.log('accuulator >>', acc);
    acc = acc+ item;
    return acc; // must return acc;
},0);  //where 0 is accumulator // 1st value // initializer;
console.log('number >', number);
console.log('sum of number >', sum);

var count = number.reduce(function(acc){
    acc++;
    return acc;
},0);

// var count = number.reduce(function(acc){
//     acc++;
//     return acc;
// },{}); // will reduce to object {}


console.log('count >>', count);

