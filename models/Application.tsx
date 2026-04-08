import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    programme: {
      type: String,
      required: true,
      trim: true,
    },
    qualification: {
      type: String,
      required: true,
      trim: true,
    },
    studyMode: {
      type: String,
      required: true,
      trim: true,
    },
    motivation: {
      type: String,
      required: true,
      trim: true,
    },
    cvUrl: {
      type: String,
      required: true,
    },
    cvKey: {
      type: String,
      required: true,
    },
    cvFileName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationSchema);