var asd;
asd = 'hehe'
asd = true;
asd = 123;
asd = ' hello from test file';

console.log('whats up' + asd);


//non-premetive data types
/*
-objects (complex data types) 
-data storage which is colleciton of properties
-properties is keas by value pair of any data
-object always carries key and values as pair
- name value pair
- property value pair
*/

//examples syntax
/*
-var a = new Object(); //new keywords stands for constructor) constructor syntax
-var test = {}; //braket notation

*/

var sushant = 
   {
    height: 5.6,  // keys and values should be seperated by comma , inside {}.
    address: 'mulpani',
    phonenumber: null,
    }
var name = 'sushantt';

//accessing properties of object
/*
- .dot notation
- bracket notation
*/
console.log('details of '+ name + 'is :');
console.log('###' , sushant);// acess whole oblects
console.log('only address: ' + sushant.address); //using dotnotation
console.log('hieght :', sushant['height']); 
// for properties they must be in string
//else it will search for refrence(variable), which must be declare
//i.e. console.log('height', sushant[height]). // wrong for accessing
//----or----
var ht= 'height';
console.log('ht is' , sushant[ht]);

//adding properties, can add outside oblect.
sushant.MarriedStatus= true;
console.log('contains updated status of sushant ', sushant);

// array///
var a= '#########array########';
console.log(a);

// using bracket notation as > var asd= [];
var guys = ['bajra', 'aman', 'sushant', 'dikesh', 'bajra', 'bikesh',
'1234',{},];
console.log('guys', guys )
console.log('at second index', guys[1]);








