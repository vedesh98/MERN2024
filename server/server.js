const express = require("express");
const PORT = 5000;
const app = express();
const authRouter = require("./router/auth-router")
const contactRouter = require("./router/contact-router")

const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");


app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server in running at port ${PORT}`);
    })
})



