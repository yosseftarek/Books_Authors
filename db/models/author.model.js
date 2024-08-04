import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,

  },
  birthDate: {
    type: String,
    required: true,

  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "book" }],
});

const Author = mongoose.model("author", authorSchema);

export default Author
