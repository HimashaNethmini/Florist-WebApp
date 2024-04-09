import express from "express";
import postRoute from "./routes/postRoute.js";
import authRoute from "./routes/authRoutes.js";

const app = express();

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);


app.listen(8800, () => {
    console.log("Server is running!");
});