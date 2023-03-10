
import { Request, Response } from "express";
import { fetchAllVideos} from "../service/movies.service";
import { CommentModel } from "../model/comments.model";
import { getOrSetCache } from "../utils/redis";
import { number } from "zod";

export async function findVideosHandler(_: Request, res: Response) {

interface Movie {
  title: string;
  release_date: string;
  episode_id: number;
  comment_count?: number;
}
  
 try {
    const response = (await getOrSetCache("movies", async () => {
    const data = await fetchAllVideos();
    return data;
  }))
    const movies: Movie[] = response?.data.results;
   
   // Sort movies by release date
   movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

   const moviesData = movies.map(async (movie) => {
      const { title, release_date, episode_id } = movie;
   // Get comment count for movie
        const commentCount = await CommentModel.countDocuments({
          movieId: episode_id,
        });
      return { title, release_date, id: episode_id, comment_count: commentCount};
   });
   
   const moviesWithCommentCount = await Promise.all(moviesData);

   res.status(200).json({message: "Movies fetched", data: moviesWithCommentCount});
   
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

