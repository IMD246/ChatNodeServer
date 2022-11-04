const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        email: {
                type: String,
                required: true,
                unique: true,
        },
        name: {
                type: String,
                required: true,
        },
        isDarkMode: {
                type: Boolean,
                default: false,
        },
        urlImage: {
                type: String,
                default: "",
        },
        deviceToken: {
                type: String,
                default: "",
        }
}, { timeStamp: true }
);
module.exports = mongoose.model("User", UserSchema);