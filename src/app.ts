import express  from "express";
import cors from "cors";
import { config } from "dotenv"
import UsersRouter from "./routes/UsersRouter";
import DepartmentsRouter from "./routes/DepartmentsRouter";
import AreasRouter from "./routes/AreasRouter";
import TypesAnswersRouter from "./routes/TypesAnswersRouter";
import SurveysRouter from "./routes/SurveysRouter";
import UsersSurveysRouter from "./routes/UsersSurveysRouter";
import AnswersRouter from "./routes/AnswersRouter";
import QuestionsRouter from "./routes/QuestionsRouter";
import ResultsRouter from "./routes/ResultsRouter";

config();

const app = express();
const router = express.Router();

const { APP_PORT, URL_FRONTEND, API_URL  } = process.env

const port = APP_PORT ?? 3200;
app.use(express.json());

app.use(cors({
    origin: URL_FRONTEND,
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello World!... Let's start with Criteria");
});


// *******   RUTAS  *********

router.use("/users/", UsersRouter);

router.use("/departments/", DepartmentsRouter);

router.use("/areas/", AreasRouter);

router.use("/types_answers/", TypesAnswersRouter);

router.use("/surveys/", SurveysRouter);

router.use("/users_surveys/", UsersSurveysRouter);

router.use("/answers/", AnswersRouter);

router.use("/questions/", QuestionsRouter);

router.use("/results/", ResultsRouter);

app.use(API_URL || '', router);



// *******  *********


app.listen(port, () => {
    console.log("Example app listening on port " + port);
});

