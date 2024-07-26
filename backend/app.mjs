import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import indexRouter from "./routes/index.mjs";

const app = express();
const port = 3000;

// Configure CORS

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,POST, DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
