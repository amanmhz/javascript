//copied from callbackcontd.js

//task part
function askformoney(amt, cb){
    console.log('what comes in cb >> ', cb);
    var a = '90k'; //available amount;
    setTimeout(function() {
        if (a>=amt){
            cb(null,'70k');
        }
        else {
            cb('something data for err');
        }
    }, 500);
}

//another task 
function buyalaptop(model,cb){
    console.log('requested model >>' ,model);
    console.log('what comes in cb >> ', cb);
   var available_in_store = ['hp','acer','lenovo'];
    setTimeout(function(){
        if (model == available_in_store[0] | available_in_store[1] | available_in_store[2]){
            console.log('laptop is available ');
            cb(null,model);
        }
        else{
        console.log('currently not available');
        cb('data_for_err');
        }

    },300 );
}

//again another task // to download games and install software
function dwn_soft(cb){
    console.log('what comes in >>' , cb);
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
            cb(null,sft);
        }
        else{
            console.log('currently internet is not available ');
            cb('err');
        }
    },200);
}

//another task to play games
function play(game,cb){
    console.log('what comes in >>>', cb);
    console.log('selected games >>>',game)
    setTimeout(function(){
        cb(null,game);
    }, 100);
}


//execution part
console.log('asked mom for money to buy laptop about 60k ');
askformoney('60k',function(err, done){
    console.log('executed this fn');
    if (err){
        console.log('failed to received');
    }
    else {
        console.log('received money from mom sucessfully');
        console.log('received >>>>' , done);
        //executes another task
        console.log('goes to laptop shop');
        console.log('asked for desired laptop to shopkeeper.')
        buyalaptop('hp',function(err,done){
            if (err){
                console.log('unable to buy');
            }
            else{
                console.log('bought laptop >>>>', done); 

                dwn_soft(function(err,done){
                    if (err){
                        console.log('unable to download ');
                    }
                    else{
                        console.log('sucessfully downloaded sft >>', done);
                        play(done.game2,function(err,done){
                            console.log('played ', done , ' game ');
                            console.log('and take rest');
                        });
                    }
                });
                console.log('eat food'); // non blocking
                console.log('make a call to friends'); // non blocking 
            }
        });
        console.log('take a coffee and rest for a while'); // non blocking
    }
} );

console.log('non blocking task asdijasrg');
