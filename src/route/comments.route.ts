import express from "express";

import { 

  createCommentHandler, getCommentsHandler,


} from "../controller/comments.controller";
const router = express.Router();


router.post("/:id",  createCommentHandler);

router.get("/:id", getCommentsHandler);
export default router;
