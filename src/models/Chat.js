const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    
    sender_id: {
        type:String,
        required: true
    },
    receiver_id: {
        type:String,
        required: true
    }, 
    message: {
        type:String,
        required:true
    }
});

const chatModel = mongoose.model("chatModel", chatSchema);

module.exports= chatModel;
