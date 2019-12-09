//scope
//accessibility of variables/function
//types of scope
/*
-global scope // which is assign in global , and can acess everywhere
-local scope // unable to acess variables , of another functions. 
-block scope
*/


//example of block scope ..    block {}
let asd = 'sushant'
function fn(a)
{
    let asd = 'dikesh';
    if (a) { 
        let asd = 'bajra';
    }
    else{ let asd = 'aman';}
console.log(asd);
}

fn(true);
console.log(asd);
//output dikesh and sushant 

