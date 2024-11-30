import express from 'express'
import { moviecreate, moviedelete, moviedetail, movieindex, movieupdate } from '../controllers/movies.controller.js';


const router=express.Router();

router.get('/',movieindex);

router.get('/:id',moviedetail);

router.post('/',moviecreate);

router.put('/:id',movieupdate);

router.delete('/:id',moviedelete);



export default router;