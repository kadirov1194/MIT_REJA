// Module Package: External Modullar:  ularni ishlatishdan oldin USTANOVKA qilish shart

// nodemon - bizning operatsiyamizni avtomatik tarzda yangilab turadi

const moment = require("moment"); // moment package:    npm install moment --save
const time = moment().format();
console.log(time);

setInterval(() => {
  console.log(`hozirgi vaqt ${time}`);
}, 5000);
//----------------------------------------

// inquerer package:   npm install --save inquirer
// inquirer - bu terminalimiz bn bog'liq bo'lgan amallar ya'ni javoblar ichidan bittasini tanlash, sonni kiritish kabi amallarni bajaradi

const inquirer = require("inquirer");
inquirer
  .createPromptModule([
    { input: "input", name: "raqam", message: "raqamni kiriting? " },
  ])
  .then((answer) => {
    console.log("men kiritgan raqam qiymati: ", answer.raqam);
  })
  .catch((err) => console.log(err));
//-------------------------------------------------------------

// validator: npm i validator
// bizga malumotlarni validate qilib beradi. True yoki False qiymat qaytaradi
// yani bizning kiritgan stringimiz @emailmi yoki yoqmi tekshiradi

const validator = require("validator");
const test = validator.isEmail("foo@bar.com");
console.log("test: ", test);
//-----------------------------------------------------------------

// chalk:  npm install chalk
// ranglar ustida amallar

const chalk = require("chalk");
const log = console.log;

log(
  chalk.backgroundColorNames("Hello") +
    "World" +
    chalk.foregroundColorNames("!")
);
