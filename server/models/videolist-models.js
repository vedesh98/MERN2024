const { Schema, model } = require("mongoose");

const videolistSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }, video_file_path: {
        type: String,
        require: true,
    }, thumbnail_URL: {
        type: String,
        require: true,
    }, subscription: {
        type: String,
        require: true,
    }, requirements: {
        type: String,
        require: true,
    }
},{ timestamps: true, })


const VideoList = new model('VideoList', videolistSchema);

module.exports = VideoList;