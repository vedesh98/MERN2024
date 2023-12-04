


const validate = (schema) => async (request, response, next) => {
    try {
        console.log(schema.parseAsync)
        const parseBody = await schema.parseAsync(request.body);
        response.body = parseBody;
        next();

    } catch (err) {

        const error = {
            status: 422,
            message: "fill the input properly",
            extraDetails: err.errors[0].message
        };

        next(error);
    }

}

module.exports = validate;



