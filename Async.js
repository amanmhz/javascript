//sync pattern
/*
flow executions/ step wise exe
waits result of previous step. after result goes to next step
easy to implement logic
readable code
------
time consumimg // slow execution
*/

//async //java script
/*
doesnot waits for result of previous step. just execute the stepwise.
fast execution / async
-------
difficult to emplement logic
unreadle pattern
*/

console.log('1');
console.log('2');
console.log('3');
setTimeout( function(){
    console.log('delayed');
    console.log('4');
}, 1000);

console.log('5');
console.log('6');