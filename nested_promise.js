//copied from callbackcontd.js

//task part
function askformoney(amt){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            var a = 90; //available amount;
            if (a>=amt){
               // cb(null,'70k');
                resolve('70k');
            }
            else {
                reject('mom does not have enough money');
            }
        }, 500);
    })  
}

//another task 
function buyalaptop(model){

    console.log('requested model >>' ,model);
   return new Promise(function(resolve,reject){
    var available_in_store = ['hp','acer','lenovo'];
    setTimeout(function(){
        if (model == available_in_store[0] | available_in_store[1] | available_in_store[2]){
            console.log('laptop is available ');
           // cb(null,model);
           resolve(model);
        }
        else{
       reject('currently not available')
        }
    },300 );

   })
}

//again another task // to download games and install software
function dwn_soft(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            sft = {
                game1 : 'cod',
                game2 : 'pubg' ,
                sft1 : 'adobe_reader',
                sft2 : 'vs_code and nodejs'
            }
            var internet = true;
            if (internet){
                console.log('downloaded the software and games');
                //cb(null,sft);
                resolve(sft);
            }
            else{
                reject('currently internet is not available ');
            }
        },200);

    })
 
}

//another task to play games
function play(game){
    return new Promise(function(resolve, reject){
        console.log('selected games >>>',game)
        setTimeout(function(){
            //cb(null,game);
            resolve(game);
        }, 100);
    })
}


//execution part
console.log('asked mom for money to buy laptop about 60k ');
askformoney(30)
    .then (function(data){
        console.log('received money from mom >>' , data);
        console.log('goes to laptop shop');
        console.log('asked for desired laptop to shopkeeper.')
        return buyalaptop('hp'); // returning for chaining for next .then block for buylaptop fn.
    })
    .then(function(data){
        console.log('bought laptop >>>>', data);
        var a = dwn_soft();
                console.log('eat food'); // non blocking
                console.log('make a call to friends'); // non blocking 
                return a;
    })
    .then(function(data){
                console.log('sucessfully downloaded sft >>', data);
                return play(data.game2);
    })
    .then(function(data){
        console.log('played ', data , ' game ');
        console.log('and take rest');
    })
    .catch(function(err){
        console.log(err);
    })


//     console.log('executed this fn');
//     if (err){
//         console.log('failed to received');
        
//     }
//     else {
//         console.log('received money from mom sucessfully');
//         console.log('received >>>>' , done);
//         //executes another task
//         console.log('goes to laptop shop');
//         console.log('asked for desired laptop to shopkeeper.')
//         buyalaptop('hp',function(err,done){
//             if (err){
//                 console.log('unable to buy');
//             }
//             else{
//                 console.log('bought laptop >>>>', done); 

//                 dwn_soft(function(err,done){
//                     if (err){
//                         console.log('unable to download ');
//                     }
//                     else{
//                         console.log('sucessfully downloaded sft >>', done);
//                         play(done.game2,function(err,done){
//                             console.log('played ', done , ' game ');
//                             console.log('and take rest');
//                         });
//                     }
//                 });
//                 console.log('eat food'); // non blocking
//                 console.log('make a call to friends'); // non blocking 
//             }
//         });
//         console.log('take a coffee and rest for a while'); // non blocking
//     }
// } );

console.log('non blocking task asdijasrg');
 