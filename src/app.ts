import express  from "express";
import cors from "cors";
import { config } from "dotenv"
import UsersRouter from "./routes/UsersRouter";
import DepartmentsRouter from "./routes/DepartmentsRouter";

config();

const app = express();
const { APP_PORT, URL_FRONTEND } = process.env

const port = APP_PORT ?? 3200;
app.use(express.json());

app.use(cors({
    origin: URL_FRONTEND,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!... Let's start with Criteria");
});

app.use("/users/", UsersRouter);

app.use("/departments/", DepartmentsRouter);

app.listen(port, () => {
    console.log("Example app listening on port " + port);
});

