const express = require("express");
const cors = require("cors");
const app = express();
const AuthRouter = require("./Routes/AuthRouter");
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
