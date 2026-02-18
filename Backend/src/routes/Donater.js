import express from "express";
import Donater from "../models/donater.model.js";
import { validateDonatorData } from "../utils/validation.js";

const donaterRouter = express.Router();


donaterRouter.post("/", async (req, res) => {
    try {
        const { name, email, phoneNo, amount, isPublic } = req.body;


        const validation = validateDonatorData(req.body);
        if (!validation.isValid) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validation.errors
            });
        }

       
        const donorId = `W18-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

        const newDonater = new Donater({
            name,
            email,
            phoneNo,
            amount,
            isPublic: isPublic !== undefined ? isPublic : true,
            donorId
        });
        await newDonater.save();

        res.status(201).json({
            message: "Donator registered successfully",
            donator: newDonater
        });
    } catch (error) {
        console.error("POST /donater error:", error);
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists" });
        }
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


donaterRouter.get("/", async (req, res) => {
    try {
        const donators = await Donater.find().sort({ createdAt: -1 });

        
        const sanitizedDonators = donators.map(d => ({
            donorId: d.donorId,
            amount: d.amount,
            name: d.isPublic ? d.name : "Anonymous Donor",
            date: d.createdAt,
            isPublic: d.isPublic
        }));

        res.status(200).json(sanitizedDonators);
    } catch (error) {
        console.error("GET /donater error:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

export default donaterRouter;
