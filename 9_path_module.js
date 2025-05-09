const path = require('path');
 
console.log(path.sep);//it gives the separator of the path in the system
const filePath =path.join('/content','subfolder','test.txt');//inplace of ',' it adds '/'
// const filePath =path.join('/content\\','\\\subfolder','test.txt');//extra '\','/' will be ignored
console.log(filePath);
const base = path.basename(filePath);
console.log(base);//it gives the last part of the path


const absolute = path.resolve(__dirname,'content','subfolder','test.txt');// here if i write '/' it will omit previous path and take the path from that point
console.log(absolute);//it gives the absolute path of the file in the system
