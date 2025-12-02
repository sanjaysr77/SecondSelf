import express from 'express';
import auth from "./auth";

const app = express();
app.use(express.json())

app.use("/auth", auth)

app.listen(3000, () => {
    console.log("Running on Port 3000")
})