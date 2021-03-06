const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiroutes");
const htmlRoutes = require("./routes/htmlroutes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(routes);
app.use(htmlRoutes);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
