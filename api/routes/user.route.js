import express from 'express';
import { test } from '../controllers/user.controller.js';

const router =express.Router();

router.get("/test",test);  
//agr hame req send krna haidatabase ko  to hm  router.put use krenge

export default router;