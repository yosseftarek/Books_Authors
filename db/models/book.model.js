import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: String,
    default: Date.now.toString(),
  },
});

const Book=mongoose.model('book',bookSchema)
export default Book
