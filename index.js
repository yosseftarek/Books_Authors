import express from "express";
import "./db/dbConnection.js";
import bookRouter from "./modules/book/book.routes.js";
import authorRouter from "./modules/author/author.routes.js";

process.on("uncaughtException", () => console.log("error"));

const app = express();
const port = 3000;
app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.use((err, req, res, next) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({ message });
});

app.listen(port, () => console.log(` app listening on port ${port}!`));

process.on("unhandledRejection", () => console.log("error"));
