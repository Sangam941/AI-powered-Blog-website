import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      id : String,
      url : String,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    category: {
      type: String,
      required: true,
      enum: ["Technology", "Startup", "Lifestyle", "Finance"],
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);
