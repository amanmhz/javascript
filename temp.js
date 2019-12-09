
// console.log('#####example####');
// var time = '21hr23min45sec';

// function calc(time){
//     var hr = time.split('hr');
//     var min = hr[1].split('min');
//    var sec = min[1].split('sec');
//     console.log(hr);
//     console.log(min);
//     console.log(sec);
//     console.log(hr[0],' ', min[0], ' ', sec[0]);
//     var obj= {
//         hour : hr[0],
//         min : min[0],
//         sec : sec[0],
//     }
//      return obj; 
// }

// var res = calc(time);
// console.log('result>>>',res);
// console.log('hour>>', res.hour);
// console.log('second >>', res.sec);


//prototype

var obj = {
    asd: 'asdfff'
}
var arr = ['asd','asdd','jihf'];

Array.prototype.name = 'aman';
Object.prototype.as = {
    asd:'asd'
}
 


console.log('asd >>',arr.name );
arr.name;
console.log('asd ma',obj.as);



