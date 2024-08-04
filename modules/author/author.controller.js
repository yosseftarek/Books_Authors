import Author from "../../db/models/author.model.js";
import { AppError, catchAsyncError } from "../../utils/error.js";

export const addAuthor = catchAsyncError(async (req, res) => {
  const { name, bio, birthDate, books } = req.body;
  const result = await Author.create({ name, bio, birthDate, books });
  return res.json({ message: "Author is added successfully", result });
});

export const getAllAuthors = catchAsyncError(async (req, res) => {
  const authors = await Author.find();
  return res.json({ message: "success", authors });
});

export const getSpecificAuthor = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) throw new AppError("auther with this id is not exist", 400);
  return res.json({ author });
});

export const updateAuthor = catchAsyncError(async (req, res) => {
  const { name, bio, birthDate, books } = req.body;
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) throw new AppError("Author is not exist", 400);
  const result = await Author.findByIdAndUpdate(
    id,
    {
      name,
      bio,
      birthDate,
      books,
    },
    { new: true }
  );
  return res.json({ message: "Author is updated successfully", result });
});

export const deleteAuthor = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) throw new AppError("Author is not exist", 400);
  const result = await Author.findByIdAndDelete(id);
  return res.json({ message: "Author is deleted successfully", result });
});

export const filterAuthors = catchAsyncError(async (req, res) => {
  const { name, bio } = req.body;
  const filters = {};
  if (name) {
    filters.name = { $regex: new RegExp(name.trim(), "i") };
  }
  if (bio) {
    filters.bio = { $regex: new RegExp(bio.trim(), "i") };
  }
  const allAuthors = await Author.find(filters);
  return res.json({ allAuthors });
});

export const getAuthorWithHisBooks = catchAsyncError(async (req, res) => {
  const { id } = req.params;
  const allBooks = await Author.find({ _id: id }, { books: 1, _id: 0 });
  res.json({ allBooks });
});
