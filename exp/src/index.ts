import express, { Request, Response } from "express";
import { router } from "./routes/routes";

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(8000, () => {
  console.log("listening on localhost:8000");
});
