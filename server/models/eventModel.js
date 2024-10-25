import mongoose from "mongoose";

// Define the schema using 'new mongoose.Schema()'
const eventSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    trim: true
  },
  details: { // ensure this field matches 'details' in the frontend as well
    type: String,
    required: true,
    trim: true
  },
  photo: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value) => validator.isURL(value), // validate if it's a proper URL
    //   message: 'Invalid URL for photo.'
    // }
  },
  createdAt: {
    type: Date,
    default: Date.now,
},
});

export default mongoose.model("event",eventSchema);
