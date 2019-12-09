//create server

//file file communication
//import syntax es5
var http = require('http');
// we should not provide path when importing nodejs inbuilt method and module and module(packages) installed in  node modules

var fileOp = require('./file');


var server = http.createServer(function(request,response){
    // 1st arg (request ) >> http request object
    // 2nd arg (response) >> http response object

    console.log('client connected to server');
    console.log('request.method >> ', request.method);
    console.log('request.url >>', request.url); 

    var url = request.url;
    var arr = url.split('/');
    console.log('length>>', arr.length);
    console.log(' 1 index >>', arr[2]);

     if(arr.length ==3){
        if (arr[1] == 'filecreate'){
            fileOp.createFile(arr[2],' ')
            .then (function(data){
                response.end ('file creating sucess , file name >> '+ arr[2]);
            })
            .catch (function(err){
                response.end('error file creating >>>'+ err);
            })
        }
        else if ( arr[1] == 'fileread'){
            fileOp.readFile(arr[2],function(err,done){
                if(err){
                    console.log('file reading failed >>', err);
                    response.end('error reading file >>' + err);
                }
                else{
                    console.log('file reading sucess >', done);
                    response.end('file reading sucess >>> '+ done);
                }
            });
        }
         
        else if(arr[1] == 'fileremove'){
            fileOp.removeFile(arr[2])
                .then(function(done){
                    response.end('remove sucess >>>'+ done);
                    console.log('remove sucess>>>', done);
                })
               .catch(function(err){
                   response.end('failed remove>>'+ err);
                   console.log('failed remove >>' , err);
               });
            }

        
    }
    
    else if (arr.length == 4){

        if (arr[1] == 'filerename'){
            fileOp.renameFile(arr[2],arr[3],function(err,done){
                if(err){
                    console.log('err renaming >>', err);
                    response.end('err renaming >> '+ err);
                    return;
                }
                console.log('rename sucess >> ', done);
                response.end('rename sucess >>' + done);
            });
        }
        
        if (arr[1] == 'filewrite'){
            fileOp.createFile(arr[2],arr[3])
             .then (function(data){
                response.end('file writting sucess  >>' + data);
            })
            .catch (function(err){
                response.end ('file writting error >>' + err);
            });
        }
    }

    // if(url == '/filewrite/'){
    //     fileOp.createFile('aman.txt','hello from aman file')
    //         .then (function(data){
    //             response.end('file writting sucess');
    //         })
    //         .catch (function(err){
    //             response.end ('file writting error');
    //         });
    //    // response.end('hello from server from /aman and also created aman.txt file');
    // }
    // else if (url == '/fileread'){
    //     fileOp.readFile('aman.txt')
    //     .then(function (data){
    //         response.end('file reading sucess >> ');
    //     })
    //     .catch(function (err){
    //         response.end('file reading failed>> ')
    //     });
    //     //response.end('must read file');

    //using callback
    // //execution part
    // else if (url == '/read'){
    //     fileOp.readFile('aman.txt',function(err,done){
    //         if(err){
    //             console.log('file reading failed >>', err);
    //             response.end('error reading file >>' + err);
    //         }
    //         else{
    //             console.log('file reading sucess >', done);
    //             response.end('file reading sucess >>>'+ done);
    //         }
    //     });
    // }

    // else if (url == '/rename'){
    //     fileOp.renameFile('aman.txt','amncha.txt',function(err,done){
    //         if(err){
    //             console.log('err renaming >>', err);
    //             response.end('err renaming >> '+ err);
    //             return;
    //         }
    //         console.log('rename sucess >> ', done);
    //         response.end('rename sucess >>' + done);
    //     });
    // }

    // else if (url == '/remove'){
    //     fileOp.removeFile('amncha.txt',)
    //         .then(function(done){
    //             response.end('remove sucess >>>'+ done);
    //             console.log('remove sucess>>>', done);
    //         })
    //        .catch(function(err){
    //            response.end('failed remove>>'+ err);
    //            console.log('failed remove >>' , err);
    //        });
    //     }
    
    // else if (url == '/docs'){
    //     response.end('hello from page docs');
    // }
    else if (url == '/hello') {
        response.end('hi welcome to test server of file operation through url');
    }
    else if (url == '/help'){    
        response.end('creating file >> /fileread/[filename] || writing file >> /filewrite/[filename]/[content] || reading file >> /fileread/[filename] || removing file >> /fileremove/[filename] || renaming file >> /filerename/[old filename]/[new filename]');
        response.end('for viewing files avilable >> /fileavi');
     }
}); 

server.listen (a=5000,function(err,done){
    if(err){
        console.log('server listening failed');
    }
    else{
        console.log('server lisening a port ', a);
        console.log('press CTRL + C to exit ');
    }
});

// when using http protocal to communicate between two programme http verb(method) are used 
// > get 
// > put
// > post 
// > delete
// > patch Options
