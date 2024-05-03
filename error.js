//Error Object
const error = new Error("Something went wrong!")
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object");

const {CustomError} = require("./CustomError")

// throw new CustomError("This is a custom error object")


// try{ 
//     doSomething()
// } catch(e){
//     console.log("second error occured");
//     console.log(e)
// }


function doSomething(){
    const data = fetch("localhost:300/api")
    // console.log("I am from doSomethingFunction");
    // const data = "I am from doSomethingFunction"
    return data; 
}

// //Uncaught Exception
// process.on("uncaughtException", ()=>{
//     console.log("There was an uncaught exception");
//     process.exit(1);
// })

// doSomething()

// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve(doSomething());
//     } else {
//         reject(doSomething())
//     }
// });

// promise
//     .then((val)=> {
//         console.log(val);
//     })
//     .catch((err) =>{
//         console.log("Error Occured");
//         console.log(err);
//     })




// try{
//     doSomething()
// } catch(e){
//     console.log("Error Occured");
//     console.log(e)
// };

//Exception with Async and Await

const someFunction = async()=>{

    try{
        await doSomething();
    } catch (err){
        throw new CustomError(err.message)
    }
}

someFunction();