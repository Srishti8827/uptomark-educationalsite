import express from "express";
import { contactController, loginController, registerController,eventdetails,addeventController } from "../controller/authController.js";
// import {eventdetails} from "../controller/authevents.js";

//router object
const router=express.Router();

//routing

//Register || Method Post
router.post("/register",registerController);


//LOGIN||POST
router.post('/login',loginController);


//contact post
router.post("/contact",contactController);

//get events
router.get("/events", eventdetails);

//event post
router.post("/addevent",addeventController);

export default router;