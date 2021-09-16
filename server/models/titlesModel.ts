import mongoose, { Schema } from "mongoose";

const titlesSchema = new mongoose.Schema({
  Id: Schema.Types.ObjectId,
  page: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

const TitlesModel =
  mongoose.models.Titles || mongoose.model("Titles", titlesSchema);

export default TitlesModel;
