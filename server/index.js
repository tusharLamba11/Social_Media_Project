import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://tusharlamba2000:Q5JNvD4jTOgDooaI@cluster0.qznfjgh.mongodb.net/";
const PORT = process.env.PORT || 5005;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is listening at: ${PORT} `))
  )
  .catch((error) => console.log(error.message));
