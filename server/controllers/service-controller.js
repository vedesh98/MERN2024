const { request, response } = require("express");
const VideoList = require("../models/videolist-models.js");
// const { stack } = require("../router/contact-router.js");

module.exports.videolist = async (request, response) => {
    try {
        const vidlist = await VideoList.find({}, {
            title: 1,
            description: 1,
        });
        console.log(vidlist);

        return response.status(200).json(vidlist)

    } catch (err) {
        const error = {
            stack: 500,
            message: "Videos not available",
            extraDetails: err
        }
        next(error);
    }
}


module.exports.AddVideos = async (request, response) => {
    try {
        const { title, description, video_file_path, thumbnail_URL } = request.body;
        const videoexist = await VideoList.findOne({ video_file_path: video_file_path });

        if (videoexist) {
            return response.json({ msg: "video already exists" })
        }

        const NewVideo = await VideoList.create({
            title,
            description,
            video_file_path,
            thumbnail_URL
        });

        response
            .status(201)
            .json({
                msg: NewVideo,
                token: await NewVideo.getrateToken(),                
                userId: NewVideo._id.toString(),
            })


    } catch (err) {
        const error = {
            message: "internal server error",
            status: 500,
            extraDetails: err
        }
        next(error);
    }
}