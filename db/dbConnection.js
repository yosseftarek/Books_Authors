import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/Books_Authors")
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log(err));
