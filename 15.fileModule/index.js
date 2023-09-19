// Module Package FILE
// nodeJS da wrapper degan narsa bor

// const calculate = require("./hisob");
// const natija = calculate.kopaytirish(20, 60);
// console.log("Natija: ", natija);
// console.log("============================");

// const calculate = require("./hisob");
// const natija1 = calculate.qoshish(89, 45);
// console.log("Natija: ", natija1);
// console.log("============================");

// const calculate = require("./hisob");
// const natija2 = calculate.ayirish(105, 40);
// console.log("Natija: ", natija2);
// console.log("============================");

const Account = require("./account");
Account.tellMeAboutClass();

const myAccount = new Account("Khan", 500000, 56544984646574);
myAccount.giveMeDetails();
