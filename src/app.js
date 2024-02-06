import express from "express"
import { cookieParser } from "cookie-parser";
import { Cors } from "cors";

const app = express();
// using middlewares....

app.use(Cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}));     // accepting multiple json datas
app.use(express.urlencoded({extended: true, limit: "16kb"}));  // to accept info like %20 or + for space in URL
app.use(express.static("public"));   // for saving PDF or file to server
app.use(cookieParser());    // for storing cookies of user.. Only server can add and delete it. 

export default app;