const mongoose = require("mongoose");

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env["MONGO_URI"], {
            dbName: "newsWebsite",
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectToMongoDB
