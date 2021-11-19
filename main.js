const moment = require("moment");

const myDate = new Date();
const myNewDate = moment(myDate).format('LL');

console.log(myNewDate)