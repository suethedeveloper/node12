const fs = require("fs");
const dataJson =fs.readFileSync("1-json.json").toString();
user = JSON.parse(dataJson);
user.name = "Sue Lucas"
fs.writeFileSync("1-json.json", JSON.stringify(user))
// console.log(oldData);
// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// // console.log("BOOK", bookJSON)
// fs.writeFileSync("1-json.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);
// console.log(data.title);