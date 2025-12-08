import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },
    
    isApproved: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
