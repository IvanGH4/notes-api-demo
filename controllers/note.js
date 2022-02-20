const Note = require("../models/Note");

module.exports = {
  index: async (_, res) => {
    try {
      const notes = await Note.find().sort({ createdAt: "desc" });
      res.json(notes);
    } catch (error) {
      console.log("index error", error.message);
      res.json({
        error: true,
      });
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;
      const note = await Note.findById(id);
      res.json(note);
    } catch (error) {
      console.log("show error", error.message);
      res.json({
        error: true,
      });
    }
  },

  store: async (req, res) => {
    try {
      const { title, content, important } = req.body;
      const newNote = await Note.create({
        title,
        content,
        important,
      });
      res.json({
        ok: true,
        newNote,
      });
    } catch (error) {
      console.log("store error", error.message);
      res.json({
        error: true,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content, important } = req.body;
      const updatedNote = await Note.findByIdAndUpdate(id, {
        title,
        content,
        important,
      });
      res.json({
        ok: true,
        updatedNote,
      });
    } catch (error) {
      console.log("update error", error.message);
      res.json({
        error: true,
      });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedNote = await Note.findByIdAndDelete(id);
      res.json({
        ok: true,
        deletedNote,
      });
    } catch (error) {
      console.log("destroy error", error.message);
      res.json({
        error: true,
      });
    }
  },
};
