const dotenv = require("dotenv");
const express = require("express");
const authRouter = require('./src/user/route')
const categoryRouter = require('./src/category/route')
const productRouter = require('./src/product/route')
const cartRouter = require('./src/cart/route');
const wishlistRouter = require('./src/wishlist/route')
const cors = require("cors");
const connectToMongoDb = require("./mongodbConnection/databaseConnection");
const uploadMiddleware = require("./src/uploadImage");
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
app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/wishlist', wishlistRouter)
app.use('/cart', cartRouter)
app.get("/", (req, res) => {
  res.send({
    message: "root:ok",
  });
});
app.post('/uploadImage', uploadMiddleware, (req, res) => {
  const imageUrl = req.imageUrl;
  console.log(imageUrl)
  res.send(imageUrl)
});

app.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
