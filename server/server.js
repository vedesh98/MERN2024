const express = require("express");
const PORT = 5000;
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

// app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);


app.use(errorMiddleware);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server in running at port ${PORT}`);
    })
})



