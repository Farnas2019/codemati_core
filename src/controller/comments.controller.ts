
import { Request, Response } from "express";

import { CommentModel } from "../model/comments.model";
import { createComment, findCommentByMovieId } from '../service/comments.service';


export async function createCommentHandler(req: Request, res: Response) {
  const { id } = req.params;

  const newId = Number(id);

  const { comment, name } = req.body;

  try {
    const newComment = await createComment({ comment, name, movieId: newId})
    res.status(201).json({ message: `Comment added to movie ${id}`, data: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

export async function getCommentsHandler(req: Request, res: Response) {
 const { id } = req.params;
  try {
    const comments = await findCommentByMovieId(id);

    if (comments.length === 0) {
      return res.status(404).json({ message: `No comments for movie ${id}`, data: comments});
    }
    
    res.status(200).json({ message: `Comments for movie ${id}`, data: comments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}