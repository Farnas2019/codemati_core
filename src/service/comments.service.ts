import   {Comments, CommentModel}  from '../model/comments.model';

export async function createComment(input: Partial<Comments>) {
  return CommentModel.create(input);
}

export async function findCommentByMovieId(movieId: string) {
  return CommentModel.find({ movieId });
}