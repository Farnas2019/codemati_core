
import { Request, Response } from "express";

import { CommentModel } from "../model/comments.model";
import { createComment, findCommentByMovieId } from '../service/comments.service';


export async function createCommentHandler(req: Request, res: Response) {
  const { id } = req.params;

  const { comment, name } = req.body;

  try {
    const newComment = await createComment({ comment, name, movieId: id})
    res.status(201).json({ message: `Comment added to movie ${id}`, data: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export async function getCommentsHandler(req: Request, res: Response) {
 const { id } = req.params;
  try {
    const comments = await  findCommentByMovieId(id);
    res.status(200).json({ message: `Comments for movie ${id}`, data: comments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}