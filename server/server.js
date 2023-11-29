const express = require("express");
const PORT = 5000;
const app = express();
const router = require("./router/auth-router")
const connectDB = require("./utils/db")


app.use(express.json());
app.use("/api/auth", router);


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server in running at port ${PORT}`);
    })
})



