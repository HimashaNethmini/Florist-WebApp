import express from "express";
import postRoute from "./routes/postRoute.js";

const app = express();

app.use("/api/posts",postRoute);


app.listen(8800, () => {
    console.log("Server is running!");
});