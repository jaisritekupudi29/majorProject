const express = require("express");

// Import Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Register Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Home Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start Server
app.listen(5000, () => {
  console.log("Server Running on port 5000");
});