
// setInterval(()=>{
//     console.log("hello world")
// },5000);
// console.log(require('./4_name')); 



// const name= require('./4_name');//get the module object
const {radha,rakesh} = require('./4_name');//get the module object

// console.log(name);

const Hi =require('./5_util.js');//get the module as default export
console.log(Hi);

Hi("Rakesh Ranjan Pradhan");
Hi(radha);
Hi(rakesh);

const data=require('./6-alterExport.js');//get the module as default export
console.log(data);

require('./7_mind_granade.js');// here we are not exporting it we are calling a method present in another file
 