import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./models/User.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   CONNECT DATABASE
========================= */
connectDB();

/* =========================
   CREATE DEMO USERS
========================= */
const createDemoUsers = async () => {
  try {
    const users = [
      {
        name: "Demo Customer",
        email: "customer@test.com",
        password: "123456",
        role: "customer",
      },
      {
        name: "Demo Owner",
        email: "owner@test.com",
        password: "123456",
        role: "owner",
      },
      {
        name: "Demo Admin",
        email: "admin@test.com",
        password: "123456",
        role: "admin",
      },
      {
        name: "Demo Super Admin",
        email: "superadmin@test.com",
        password: "123456",
        role: "superadmin",
      },
    ];

    for (let user of users) {
      const exists = await User.findOne({ email: user.email });

      if (!exists) {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        await User.create({
          name: user.name,
          email: user.email,
          password: hashedPassword,
          role: user.role,
        });

        console.log(`Demo user created: ${user.email}`);
      }
    }
  } catch (error) {
    console.log("Error creating demo users:", error.message);
  }
};

/* run demo user creation */
createDemoUsers();

/* =========================
   ROUTES
========================= */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});