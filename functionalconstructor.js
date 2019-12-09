//prototyped_based_oop
// functional construtor >> basic building block of prototyped

//hot to identify functional construtor
// 1> it will never returns
//2> it is called using new keyword
//generally pascalcase is used to write functional constructor

//example
console.log('this in global >>', this);
function Students(){   //functional constructor
    // this.name = 'kajai';
    // this.address = 'mulpani';
    console.log('this inside functional constructor >>', this);
    // this is object of functional constructor
    // adding any property or method(fn) to this is adding values to construtor

}

Students.prototype.name = 'aman';
Students.prototype.rollno = '1';
Students.prototype.getname = function(a){
    return a;
}


// prototyped >> used in functional constructor to add prwoperties apnd method in functional properties


var asd = new Students();
//console.log('var asd >>' , asd);
 console.log('akjbfkjabf' ,new Students());
 console.log('asd >> ', asd.name);
 console.log('asd >>', asd.rollno);
 console.log('asdad >> ',asd.getname('bajra'));

 var str = 'ahfsbdf';
 var uppercase= str.toUpperCase();
 console.log(str , 'to uppercase >> ', uppercase);

 console.log('or ')
console.log(str, '>>>' , str.toUpperCase());
console.log(str.length);








