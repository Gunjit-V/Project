const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/router")

const app = express();
//Middleware

app.use(cors());
app.use(bodyParser.json());


//Connect to MongoDB database
mongoose
    .connect("mongodb+srv://Gunjit:passcode@cluster0.nse970g.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.error(err);
    });


//Routes

app.use("/api", router)

//Start Server

app.listen(5000, () => {
    console.log("Server Started on port 5000");
});
