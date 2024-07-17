const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const path = require("path");

//config
dotenv.config();

//Database Connection
connectDb();

//object
const app = express();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//router controller
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//static file
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`.bgGreen.white);
});
