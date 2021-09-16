import mongoose, { Schema } from "mongoose";

const headingsSchema = new mongoose.Schema({
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

const HeadingsModel =
  mongoose.models.Headings || mongoose.model("Headings", headingsSchema);

export default HeadingsModel;
