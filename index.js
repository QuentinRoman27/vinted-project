const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/vinted");

cloudinary.config({
  cloud_name: "detmanbt0",
  api_key: "676152614228638",
  api_secret: "psCRe3BAwEYin4q9pYSzibuLIvY",
  secure: true,
});

const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
app.use(userRoutes);
app.use(offerRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(3000, () => {
  console.log("Server started");
});
