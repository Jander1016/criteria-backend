import app from "./app";
import cors from "cors";

const { APP_PORT, URL_FRONTEND } = process.env

const port = APP_PORT ?? 3200

app.use(cors({
  origin: URL_FRONTEND,
  credentials: true
}));


app.listen(port, () => {
  console.log("Example app listening on port " + port);
});