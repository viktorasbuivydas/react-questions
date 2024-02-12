import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
  title: { type: String, required: true, min: 3 },
  description: { type: String, required: true, min: 3 },
  likes: { type: Number, required: true, default: 0 },
  dislikes: { type: Number, required: true, default: 0 },
  userId: { type: String, required: true, min: 3 },
});

export default mongoose.model("Question", questionSchema);
