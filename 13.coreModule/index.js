// Module packages CORE

//----------------------------------------------
// setTimeout(function () {
//   console.log("Ishga tushdi:");
// }, 5000);
//-----------------------------------------------
// let number = 0;
// setInterval(function () {
//   console.log("hisob", number);
//   number++;
// }, 1000);
//-----------------------------------------------

const fs = require("fs"); // require ni ichida FileSystem(fs) ni olib beradi
const data = fs.readFileSync("./input.txt", "utf-8");
console.log(data);

fs.writeFileSync("./input.txt", `${data} \n\t\t by Khan`);
const new_data = fs.readFileSync("./input.txt", "utf-8");
console.log(new_data);
// Module packages CORE

// Module packages CORE
