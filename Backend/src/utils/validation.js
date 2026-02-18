import validator from "validator";

export const validateDonatorData = (data) => {
    const { name, email, phoneNo, amount } = data;
    const errors = [];

    if (!name || !validator.isLength(name, { min: 2, max: 50 })) {
        errors.push("Name must be between 2 and 50 characters.");
    }

    if (!email || !validator.isEmail(email)) {
        errors.push("Invalid email address.");
    }

    if (!phoneNo || !validator.isMobilePhone(phoneNo, 'any')) {
        errors.push("Invalid phone number.");
    }

    if (!amount || isNaN(amount) || amount < 1) {
        errors.push("Donation amount must be at least 1.");
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
