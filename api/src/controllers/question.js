import ResourceModel from "../models/question.js";

const GET_ALL_QUESTIONS = async (req, res) => {
  try {
    const questions = await ResourceModel.find();
    return res.status(200).json({ questions: questions });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const GET_ALL_QUESTIONS_BY_USER = async (req, res) => {
  try {
    const question = await ResourceModel.find({ userId: req.body.userId });
    return res.status(200).json({ questions: question });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const CREATE_QUESTION = async (req, res) => {
  try {
    const question = new ResourceModel({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
    });

    const response = await question.save();

    return res
      .status(201)
      .json({ message: "Question was added", response: response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const LIKE_QUESTION = async (req, res) => {
  try {
    const question = await ResourceModel.findOne({ _id: req.params.id });

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.likes = question.likes + 1;
    question.save();

    return res.status(200).json({ question: question });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const DISLIKE_QUESTION = async (req, res) => {
  try {
    const question = await ResourceModel.findOne({ _id: req.params.id });

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    question.dislikes = question.dislikes + 1;
    question.save();

    return res.status(200).json({ question: question });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

const DELETE_QUESTION = async (req, res) => {
  try {
    const question = await ResourceModel.findOneAndDelete({
      _id: req.params.id,
    });

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    return res.status(200).json({ question: question });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_BY_USER,
  CREATE_QUESTION,
  LIKE_QUESTION,
  DISLIKE_QUESTION,
  DELETE_QUESTION,
};
