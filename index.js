
const path = require("path");

const filePath = "/Users/justinjones/Desktop/Tech/Continious Learning/nodejs_error_handling/files/sample.txt"

//dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath))

// const sampleFile = "sample.txt"

// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require("fs");

//Reading from a file

console.log(fs.readFile(filePath, "utf-8", (err, data )=>{
    if(err) throw new Error("Something went wrong");
    console.log(data.toString());
}));

// console.log(fs.readFile(filePath, "utf-8", (err, data)=>{
//     if(err) throw new Error("Something went wrong again");
//     console.log(data.toJSON);
// }));