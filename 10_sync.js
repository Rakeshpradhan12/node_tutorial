// const fs = require('fs');
// fs.readFileSync
const {readFileSync,writeFileSync}= require('fs');
console.log("start");
const first = readFileSync('./content/first.txt','utf8');
console.log('read file done1');
const second = readFileSync('./content/second.txt','utf8');
console.log('read file done2');
console.log(first,second);
// writeFileSync('./content/sync.txt',`we have write ${first} ${second} inside this file using sync method `)//override text in this file
writeFileSync('./content/sync.txt',`appending this text ${first}`,{flag:'a'});//append in this file
console.log('write file done');