import mongoose from "mongoose";
import validator from "validator";

const donatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be at least 2 characters long"],
        maxLength: [50, "Name cannot exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Please enter a valid email address"
        }
    },
    phoneNo: {
        type: String,
        required: [true, "Phone number is required"],
        trim: true,
        validate: {
            validator: (value) => validator.isMobilePhone(value, 'any'),
            message: "Please enter a valid phone number"
        }
    },
    amount: {
        type: Number,
        required: [true, "Donation amount is required"],
        min: [1, "Donation amount must be at least 1"]
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    donorId: {
        type: String,
        unique: true,
        required: true
    },
}, {
    timestamps: true
});

const Donater = mongoose.model("Donater", donatorSchema);

export default Donater;
