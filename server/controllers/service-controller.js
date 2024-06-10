const { request, response } = require("express");
const VideoList = require("../models/videolist-models.js");
// const { stack } = require("../router/contact-router.js");

module.exports.videolist = async (request, response) => {
    try {
        const vidlist = await VideoList.find({},{
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
        const body = request.body;
        
    } catch (err) {
        
    }
}