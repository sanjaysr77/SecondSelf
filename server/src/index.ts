import express, { Application } from 'express';
import auth from "./auth";
import content from "./content"
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger'; // Ensure this points to your swagger.ts file

const app = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))

app.use("/auth", auth)
app.use("/v1", content)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(3000, () => {
    console.log("Running on Port 3000");
    console.log(`Docs available at http://localhost:3000/api-docs`);
})