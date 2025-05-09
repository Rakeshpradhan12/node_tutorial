const {readFile,writeFile} = require('fs');
console.log("start");
readFile('./content/first.txt','utf-8',(error,res1)=>{
    if(error) {
        console.log(error);
    }   
        console.log("read file done1");
        console.log(res1);//res is available online inside the block so if we want to write something from this file to another we have to write inside this callback function
     readFile('./content/second.txt','utf8',(err,res2)=>{
        if (err) throw err;
        console.log(res2);
        console.log("read file done2");
        writeFile("./content/async.text",`using async function appending/overriding ${res1} ${res2}`,{flag:'a'},(err)=>{
              console.log(err);
              console.log("write file done");
        })

      })
     })
     console.log("end");
//  we are in callback hell 🤐🤐🤐🤐🤐🤐🤐☠️☠️☠️☠️☠️