import express from 'express';
import auth from "./auth";
import content from "./content"

const app = express();
app.use(express.json())

app.use("/auth", auth)
app.use("/v1", content)

app.listen(3000, () => {
    console.log("Running on Port 3000")
})