// src/app.ts
import express from "express";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
app.use(express.json());

// Use routes
app.use(userRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(orderRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
