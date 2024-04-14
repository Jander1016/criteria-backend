import express  from "express";
import { config } from "dotenv"

config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!... Let's start with Criteria");
});

export default app