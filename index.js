
const path = require("path");

const filePath = "/Users/justinjones/Desktop/Tech/Continious Learning/nodejs_error_handling/files/sample.txt"

const fsPromise = require("fs").promises; 

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

// const fs = require("fs");

// //Reading from a file

// console.log(fs.readFile(filePath, "utf-8", (err, data )=>{
//     if(err) throw new Error("Something went wrong");
//     console.log(data.toString());
// }));

// console.log(fs.readFile(filePath, "utf-8", (err, data)=>{
//     if(err) throw new Error("Something went wrong again");
//     console.log(data.toJSON);
// }));


// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

const fs = require("fs");
// //Reading from a file
// fs.readFile(filePath, (error, data)=>{
//     if(error) throw new Error("Something Went wrong");
//     console.log(data.toString());

// })

// try {
//     const data = fs.readFileSync(path.join(__dirname, ))
    
// } catch (error) {

//     console.log(error);
// }

const test = fs.readFileSync(path.join(__dirname, "files", "sample.txt"))

// console.log(test.toString());

// try {
//     const test1 = fs.writeFileSync(path.join(__dirname, "files", "text.txt"), "where are you going")
//     console.log(test1.toString());
// } catch (error) {
//     console.log(error);
// }



// const filereading = async ()=>{
//     try {
//             const data = await fsPromise.readFile(filePath, {encoding: "utf-8"})
//             console.log("FS Promises: ",data);
        
//         } catch (error) {
    
//             console.log(error);
//         }

// }


// filereading()

const txtFile = path.join(__dirname, "files", "text.txt");
const content = "I am going to be software engineer, cloud architect, cyber security"
// fs.writeFile(txtFile, content, (err)=> {
//     if(err) throw new Error("Something went wrong!");
//     console.log("Write Operation Completed Successfully");
//     fs.readFile(txtFile, (err, data)=>{
//         if(err) throw new Error("Something went wrong in the second operation.");
//         console.log(data.toString());
//     })
// })

// console.log(txtFile);
const txtFile2 = " Tech and finance business"

const writingInFile = async ()=>{
    
    try {   
        await fsPromise.writeFile(txtFile, content); 
        await fsPromise.appendFile(txtFile, txtFile2);
        await fsPromise.rename(txtFile,path.join( __dirname,"files", "newText.txt")) 
        // const newPath = fsPromise.join(__dirname, "files", "newText.txt")
        const data = await fsPromise.readFile(__dirname, "files", "newText.txt");
        console.log(data.toString());
    } catch (error) {
        console.log(error);
        
    }

}

writingInFile();