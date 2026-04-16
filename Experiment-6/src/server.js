const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");   // ✅ ADD THIS
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());                // ✅ ADD THIS
app.use(bodyParser.json());

app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});