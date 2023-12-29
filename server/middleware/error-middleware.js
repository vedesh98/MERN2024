const errorMiddleware = (err, request, response, next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND ERROR";
    const extraDetails = err.extraDetails || "Error from Backend";
    console.log('status');

    return response.status(status).json({ message, extraDetails })
}


module.exports = errorMiddleware;