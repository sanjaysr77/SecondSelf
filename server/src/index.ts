import express from 'express';
import auth from "./auth";
import content from "./content"
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use("/auth", auth)
app.use("/v1", content)

app.listen(3000, () => {
    console.log("Running on Port 3000")
})