const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("API is Running");
});

app.use("/api/user", userRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started at PORT ${PORT}`));
