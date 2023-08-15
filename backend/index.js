const dotenv = require("dotenv");
const express = require("express");
const authRouter = require('./src/user/route')
const cors = require("cors");
const connectToMongoDb = require("./mongodbConnection/databaseConnection");
const enviroment = process.argv[2] || "development";
dotenv.config({
  path: `${__dirname}/config/.env.${enviroment}`,
  node_env: process.argv[2] || "development",
});
connectToMongoDb();
const { PORT } = process.env;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRouter)
app.get("/", (req, res) => {
  res.send({
    message: "root:ok",
  });
});
app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
