import express from "express";

import {

  findVideosHandler,

} from "../controller/movies.controller";
const router = express.Router();


router.get("/", findVideosHandler);


export default router;
