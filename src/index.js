//require('dotenv').config({path: './env'})   // configuring env file..
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`The server is listening at http:/localhost:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(`Error: ${err}`);
})



// 1st approach...
// import express from "express";

// const app = express();


// ( async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//         app.on("error", (error)=>{
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(` The server is listening at http:/localhost:${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error;
//     }
// })()