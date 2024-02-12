import express from "express";

import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTIONS_BY_USER,
  CREATE_QUESTION,
  LIKE_QUESTION,
  DISLIKE_QUESTION,
  DELETE_QUESTION,
} from "../controllers/question.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/questions", auth, GET_ALL_QUESTIONS);
router.get("/questions/:userId", auth, GET_ALL_QUESTIONS_BY_USER);
router.post("/questions", auth, CREATE_QUESTION);
router.post("/question/:id/like", auth, LIKE_QUESTION);
router.post("/question/:id/dislike", auth, DISLIKE_QUESTION);
router.delete("/question/:id", auth, DELETE_QUESTION);

export default router;
