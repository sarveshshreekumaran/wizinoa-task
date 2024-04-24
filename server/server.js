require("dotenv").config();
const connectDB = require("./configs/dbConn");
connectDB();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(port, () => {
  console.log(`Server listing on ${port}`);
});
const userRoutes = require("./routes/userRoutes");
const fileRoutes = require("./routes/fileRoutes");
app.use("/user", userRoutes);
app.use("/file", fileRoutes);
