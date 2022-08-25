require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database !!"))
  .catch((err) => console.log(err));

app.use("/api/programs", require("./routes/routes"));
app.use("/api/assignments", require("./routes/assignment.routes"));

app.listen(port, () =>
  console.log(`server has running at http://localhost:${port}`)
);
