import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    blogs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
      }
    ],

  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
