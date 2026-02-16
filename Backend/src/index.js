import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongodb from "./config/dataBase.js";
import donaterRouter from "./routes/Donater.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/donater", donaterRouter);



mongodb()
    .then(() => {
        console.log("connected");
        app.listen(PORT, () => {
            console.log(`app is listening on port ${PORT}`);
        })

    })
    .catch((err) => console.log(err));