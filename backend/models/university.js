// const mongoose = require("mongoose");
// const { toJSONData, paginateData } = require("./plugins");
// const { DB_MODEL_REF } = require("../config/constant");
// var mongoosastic = require('mongoosastic');

// const universitySchema = new mongoose.Schema(
//   {
//     alpha_two_code: { type: String },
//     country: { type: String },
//     domain: { type: String },
//     web_page: { type: String },
//     name: { type: String },
//     description: { type: String },
//     image: { type: String },
//     isActive: { type: Boolean, default: true },
//     createdBy: { type: String, default: null },
//     updatedBy: { type: String, default: null },
//   },
//   {
//     timestamps: true,
//   }
// );

// // add plugin that converts mongoose to json
// universitySchema.plugin(toJSONData);
// universitySchema.plugin(paginateData);

// // using elastic search plugin
// universitySchema.plugin(mongoosastic)


// const University = mongoose.model(DB_MODEL_REF.UNIVERSITY, universitySchema);
// module.exports = University;
