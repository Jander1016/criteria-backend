import express  from "express";
import cors from "cors";
import { config } from "dotenv"

config();

const app = express();
const { APP_PORT, URL_FRONTEND } = process.env

const port = APP_PORT ?? 3200

app.use(cors({
    origin: URL_FRONTEND,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!... Let's start with Criteria");
});

app.listen(port, () => {
    console.log("Example app listening on port " + port);
});

