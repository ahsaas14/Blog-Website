import  express  from "express";
import { createPost } from "../../client/src/service/api";

const router=express.Router()

router.post('/create',createPost);

export default router;