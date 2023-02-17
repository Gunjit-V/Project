const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute")

const app = express();

//Connect to MongoDB database
mongoose
    .connect("mongodb+srv://Gunjit:passcode@cluster0.nse970g.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error(err);
    });

//Middleware

app.use(cors());
app.use(bodyParser.json());

//Routes

app.post("/user", userRoute);

//Start Server

app.listen(5000, () => {
    console.log("Server Started on port 5000");
});
