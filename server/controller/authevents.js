import express from 'express';
import Event from '../models/eventModel.js';

const router = express.Router();

// export const eventdetails = async (req, res) => {
//   const { alias } = req.query;
//   try {
//     let eventData;
//     if (alias) {
//       eventData = await Event.find({ alias });
//     } else {
//       eventData = await Event.find();
//     }
//     res.status(200).json(eventData);
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
//
// export default eventdetails; // Only if you have to export the router
