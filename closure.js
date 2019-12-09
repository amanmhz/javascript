// closure
/*
inner function
which has acess to 
--global scope, parent function scope, parent function argument, own argument, own scope
*/

var asd= 'hello';
function glbfn(name){
    console.log(name);
    function inrfn(address){ //inrfn is closure
        console.log('hello', name + ', from ' + address );
    }
    //inrfn('khokana');
    return inrfn;
}

glbfn('ram')('khokana');

///acessing innerfunction/closure

function data1(a){
    console.log(a);
  var data2 =  function(b) { //using expression syntax , var data2 is function, so can return fn
        return mul = a*b;
    }
    return data2  //returns the function type data2.
}
// var ret = data2(4); // not acessible
var ret = data1(2);
console.log(ret(4));
//var retvalue =data1(2)(3); //var vartype fn_name(1st_arg)(2nd_arg)(so on)
//console.log('multiplication is', retvalue);

//#####################################################3//

function f1(){
    function f2(){
       // console.log(a);
      return 123;
    }
    return f2;
}

 //var jkl= f1()(12);
var jkl = f1();
console.log('outcomes >>>>>',jkl());

/*#########################################
################ CONTINUTE CLOSURE ###########################*/
console.log('  ')
console.log('##############  CONTINUE CLOSURE  ################')
function testing(){
    var test = 'from testing fn file';
    function a1(){
        return 'return from a1'
    }    
    function a2(){
         return 'return from a2'
    }
    function  settext(newtext){
        test = newtext;
        return 'text changed ';
    }
    function gettext(){
        return test;
    }  
    return {
        a: a1, //returns a1 function
        b: a2,  //
        settext: settext,
        gettext: gettext
    }
}

var z= testing();
console.log('result >>' , z);
console.log('result selecting a >>' , z.a());
console.log('result selecting b >>' , z.b());
console.log('test var contain before >>>', z.gettext()); // acessing test variable from function
console.log('modifing text and returning that fn  as >>>',z.settext('random text'));  //modifing the text value 
console.log('test var contain after>>>',z.gettext());