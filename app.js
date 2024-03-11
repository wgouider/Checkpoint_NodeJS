const { Console } = require("console");
const fs = require("fs");
let content = "Hello Node";
fs.writeFile("welcome.txt", content, (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" has been created with content: ', content);
});

let data = fs.readFileSync("./welcome.txt");
console.log(data.toString());

console.log("finishing....");

// const http = require("http");
// http
//   .createServer((request, response) => {
//     response.end("hello bro");
//   })
//   .listen(444);
