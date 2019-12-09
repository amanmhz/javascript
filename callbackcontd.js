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
    }, 2000);
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
        console.log('currently not available so, insist me to take hp of same features');
        cb(null,available_in_store[0]);
        }

    },1500 );
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
        console.log('asked for desired laptop to shopkeeper.')
        buyalaptop('dell',function(err,done){
            console.log('bought laptop >>>>', done); 
        });
    }
} );

console.log('non blocking task asdijasrg');
