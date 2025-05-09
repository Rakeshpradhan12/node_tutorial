const os = require('os');//os module is built in module in node js which provides information about the operating system
//os module is a global module so we don't need to install it using npm or right the path
// const {userInfo}=require('os');//you can destructure it as well
// info about current user
const user = os.userInfo();//invoking it
console.log(user);

//method returns the system uptime in seconds(how much time the system has been running)
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs={
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}

console.log(currentOs);