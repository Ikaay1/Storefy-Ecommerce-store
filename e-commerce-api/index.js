const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const pracRoute = require("./routes/prac");


dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {console.log("Connected to database")})
.catch((error) => {console.log(`${error} did not connect`)})

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/prac", pracRoute);

app.use("/", (req, res) => {
    res.send("Welcome to Storefy Api")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running")
})
