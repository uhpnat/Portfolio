const { theme, author } = require("../model/model");
const authorCon = {
  // add
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //   getAll
  getAllAuthor: async (req, res) => {
    try {
      const authors = await author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAnAuthor: async (req, res) => {
    try {
      const au = await author.findById(req.params.id).populate("theme");
      res.status(200).json(au);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getLink: async (req, res) => {
    try {
      const au = await author.findOne({ link: req.params.link }).populate("theme");
      console.log(au);
      res.status(200).json(au);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getId: async (req, res) => {
    try {
      const au = await author.findOne({ id: req.params.id }).populate("theme");
      console.log(au);
      res.status(200).json(au);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateAuthor: async (req, res) => {
    try {
      const authorToUpdate = await author.findById(req.params.id);
      await authorToUpdate.updateOne({ $set: req.body });
      res.status(200).json("Cập nhật thành công !!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateAuthorId: async (req, res) => {
    try {
      const authorToUpdate = await author.findOne({ id: req.params.id });
      await authorToUpdate.updateOne({ $set: req.body });
      res.status(200).json("Cập nhật thành công !!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteAuthor: async (req, res) => {
    try {
      //chưa xóa theme :(((
      await author.findByIdAndDelete(req.params.id);
      res.status(200).json("Xóa thành công !!!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = authorCon;
