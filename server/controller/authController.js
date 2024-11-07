import { comparePassword,hashPassword } from "../helper/authHelper.js";
import contactModel from "../models/contactModel.js";
import userModel from "../models/userModel.js";
import Event from '../models/eventModel.js';

import JWT from "jsonwebtoken"
import eventModel from "../models/eventModel.js";

export const registerController = async (req, res) => {
    try {
        const { email, password, phone, address, firstname, lastname, student } = req.body;

        // Validations
        if (!firstname) return res.status(200).send({success:false, message: "First name is required" });
        if (!lastname) return res.status(200).send({success:false, message: "Last name is required" });
        if (!email) return res.status(200).send({success:false, message: "Email is required" });
        if (!password) return res.status(200).send({success:false, message: "Password is required" });
        if (!phone) return res.status(200).send({ success:false,message: "Phone number is required" });
        if (!address) return res.status(200).send({success:false, message: "Address is required" });

        // Role validation (Student or Organizer)
        const validRoles = ["student", "organizer"];
        if (!validRoles.includes(student)) {
            return res.status(200).send({success:false, message: "Invalid role, must be either 'student' or 'organizer'" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: "Already registered with this email. Please log in."
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Save user to database
        const newUser = await new userModel({
            email, phone, address, password: hashedPassword, firstname, lastname, student
        }).save();

        // Return success response
       return res.status(201).send({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        console.error(error);
       return res.status(500).send({
            success: false,
            message: "Error in registration",
            error: error.message
        });
    }
};


//POST||login
export const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body;
        //validation
        if(!email ||!password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
     
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(200).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match=await comparePassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }
        //token
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d",
        })
        res.status(200).send({
            success:true,
            message:"login successfully",
            user:{
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
                phone:user.phone,
                _id:user._id,
                role:user.student,
                address:user.address,
                student:user.student,
            },
            token,
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}


//contact 
export const contactController=async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
        //validations
        if(!name){
            return res.send({message:"Name is Required"});
        }

        if(!email){
            return res.send({message:"Email is Required"});
        }
      
        if(!phone){
            return res.send({message:"Phone no is Required"});
        }
        if(!message){
            return res.send({error:"Message is Required"});
        }
    
        const user=await new contactModel({name,email,phone,message}).save();
        res.status(201).send({
            success:true,
            message:"Query send successfully",
            user
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in creating message",
            error
        })
    }
}


//event

export const eventdetails = async (req, res) => {
    const { alias } = req.query;
    console.log("Alias received: ", alias); 
    try {
        let eventData;

        // Fetch data based on alias if provided, otherwise get all events
        if (alias) {
            eventData = await Event.find({ alias });
            if (eventData.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No event/cource found for the given alias'
                });
            }
        } else {
            eventData = await Event.find();
            if (eventData.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: 'No event/cource available'
                });
            }
        }

        // Return success response with event data
        res.status(200).json({
            success: true,
            message: 'Events/cources fetched successfully',
            data: eventData
        });

    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({
            success: false,
            message: error
        });
    }
};



// const multer  = require('multer')
// import multer  from 'multer'
  //addevent
  export const addeventController=async(req,res)=>{
    try{
        const {subject,details,photo}=req.body;
        //validations
                // Log the incoming request data
                console.log('Request Body:', req.body);
        if(!subject){
            return res.send({message:"subject is Required"});
        }
        if(!details){
            return res.send({message:"details is Required"});
        }
        if(!photo){
            return res.send({message:"photo is Required"});
        }
        

        // const storage = multer.diskStorage({
        //     destination: function (req, photo, cb) {
        //       cb(null, 'my-uploads/')
        //     },
        //     filename: function (req, photo, cb) {
        //       const uniqueSuffix =(subject)
        //       cb(null, uniqueSuffix)
        //     }
        //   })
        //   console.log(storage);
        //   const upload = multer({ storage: storage })


        //check user
        const exisitingevent=await eventModel.findOne({subject});
        //exisiting user
        if(exisitingevent){
            return res.status(200).send({
                success:false,
                message:"Already Registered event ",
            })
        
        }
       
        const event=await new Event({subject,details,photo}).save();
        res.status(201).send({
            success:true,
            message:"event/cource added successfully",
            event
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in eventadding",
            error 
        })
    }
}
