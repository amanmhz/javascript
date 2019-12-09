
//object
//holds future value of object
//build on top of callback
//used to handle asynchronous result
//
//state 3state
//1.pending state >>> 
//2.on fulfilled //sucess
//3.on rejection // failour

// doesnot change the state after result either success or failour,

//3 method of promise (method>>object vitra ko function)
//1>then  //handle sucess and failour
//2>catch  // for handling failour
//3>finally  //to check promise settel either goes to sucess or failour

//syntax (inbuild_method

// var a = new Promise(function(resolve,reject){
//     //resolve or 1st arguments will be used to call sucess
//     //reject / 2nd argument will be used to call failure

// }

//syntax_example///
// var askformoney = new Promise(function (resolve, reject){

//     setTimeout(function(){
//         reject('error');
//     }, 1000)
// });

// //execution >> askformoney.then(fn1(),fn2())
// askformoney
//     .then(function(data){
//         console.log('im sucess of promise >>>', data);
//     }, function(err){
//         console.log('i m failure of promise', err);
//     })


//task part
function buylaptop(model)
{
    var laptop = new Promise(function (resolve,reject){
        var model_exist = true;
        setTimeout(() => {
            if(model_exist){
                resolve(model);
            }
            else{
                reject('not available');
            }
        }, 1000);
    });
    return laptop;
}

var result = buylaptop('hp');
console.log('what comes in result >>' , result);
result
    .then(function(data){  // .then for handeling sucess and failure //>>> but use only one for sucess.
        console.log('i have a laptop >>',data);
    })
    .catch(function(err){  //.catch for handeling a failure.
        console.log('>>', err);
    })
    .finally(function(dta){
        console.log('promise setteled >>', dta);
    })

