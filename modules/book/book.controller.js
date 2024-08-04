import Book from "../../db/models/book.model.js";
import { AppError, catchAsyncError } from "../../utils/error.js";

export const addBook = catchAsyncError(async (req, res) => {
  const { title, content, author, publishedDate } = req.body;
  const book = await Book.findOne({ title });
  if (book) throw new AppError("book already exist", 400);
  const result = await Book.create({ title, content, author, publishedDate });
  return res.json({ message: "book is added successfully", result });
});

export const getAllBooks = catchAsyncError(async (req, res) => {
  const books = await Book.find();
  return res.json({ message: "success", books });
});

export const getSpecificBook = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) throw new AppError("the book with this id is not exist", 400);
  return res.json({ book });
});

export const updateBook = catchAsyncError(async (req, res) => {
  const { title, content, author, publishedDate } = req.body;
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) throw new AppError("book is not exist", 400);
  const result = await Book.findByIdAndUpdate(
    id,
    {
      title,
      content,
      author,
      publishedDate,
    },
    { new: true }
  );
  return res.json({ message: "book is updated successfully", result });
});

export const deleteBook = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) throw new AppError("book is not exist", 400);
  const result = await Book.findByIdAndDelete(id);
  return res.json({ message: "book is deleted successfully", result });
});


export const filterBooks = catchAsyncError(async (req, res) => {
  const { title, author } = req.body;
  const filters = {};
  if (title) {
    filters.title = { $regex: new RegExp(title.trim(), "i") };
  }
  if (author) {
    filters.author = { $regex: new RegExp(author.trim(), "i") };
  }
  const allBooks = await Book.find(filters);
  return res.json({ allBooks });
});