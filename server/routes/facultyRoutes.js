import express from "express";
import { getConfirmedBookings, approveBooking } from "../controllers/facultyController.js";
import { getCommonSlots } from '../controllers/facultyController.js';

const router = express.Router();

router.get("/confirmed", getConfirmedBookings);
router.post("/approve", approveBooking);
router.post('/common-slots', getCommonSlots);

export default router;
