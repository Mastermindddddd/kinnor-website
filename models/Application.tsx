import mongoose, { Schema, model, models } from "mongoose";

const ApplicationSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
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

const Application =
  models.Application || model("Application", ApplicationSchema);

export default Application;