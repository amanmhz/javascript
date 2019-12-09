
var fs = require('fs');


function createfile(name,content){
    return new Promise(function (resolve,reject){
        fs.writeFile('./test/' + name,content,function(err,done){
            if (err){
                reject(err);
            }
            else{
                resolve(done);
            }
        });

    });   
}

//createFile('./test/hello.txt','hello from hello file');

// function readFile(filename){

//     return new Promise(function (resolve,reject){
//         fs.readFile('./test/' + filename ,'UTF-8', function(err,done){
//             if (err){
//                 reject(err);
//             }
//             else{
//                 resolve(done);
//                 console.log('reading sucess >> ', done);
//             }
//         }); 
//     });
// }

//using callback//execution part
function readfile(filename,cb){
            fs.readFile('./test/' + filename ,'UTF-8', function(err,done){
                if (err){
                    cb(err);
                }
                else{
                    cb(null,done);
                }
            }); 
}

function renamefile(oldpath,newpath,cb){
    fs.rename('./test/' + oldpath ,'./test/' + newpath,function(err,done){
        if (err){
            console.log('error renaming >>', err);
            cb(err);
            return;
        }
        cb(done);
        console.log('renaming sucess >>>', done);     
    });
}

function removefile(file){
    return new Promise (function (resolve,reject){
        fs.unlink('./test/' + file,function(err,done){
            if (err){
                //console.error('error reading >>',err);
                reject(err);
                return;
            }
            resolve(done);
           // console.log('sucessfully remove file >>,'done);
        });
    });
}
module.exports = {
    createFile : createfile,
    readFile : readfile,
    renameFile : renamefile,
    removeFile : removefile
}


