const mongoose = require("mongoose");
const { toJSONData, paginateData } = require("./plugins");
const { DB_MODEL_REF } = require("../config/constant");

const bookSchema = new mongoose.Schema(
    {
        author: { type: String },
        country: { type: String },
        language: { type: String },
        link: { type: String },
        pages: { type: Number },
        title: { type: String },
        year: { type: Number },
        isActive: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

// add plugin that converts mongoose to json
bookSchema.plugin(toJSONData);
bookSchema.plugin(paginateData);

const Book = mongoose.model(DB_MODEL_REF.BOOK, bookSchema);
module.exports = Book;
