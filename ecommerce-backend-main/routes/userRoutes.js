import express from "express";
import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ======================
   GET ALL USERS (ADMIN)
====================== */
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   GET ONLY ADMINS
====================== */
router.get("/admins", async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   DELETE USER / ADMIN
====================== */
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({ message: "User removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   TOGGLE ADMIN STATUS
====================== */
router.put("/toggle-admin/:id", async (req, res) => {
  try {
    const admin = await User.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (admin.role !== "admin") {
      return res.status(400).json({ message: "Not an admin account" });
    }

    admin.status =
      admin.status === "Active" ? "Disabled" : "Active";

    await admin.save();

    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   NEW SECTION — CUSTOMER ACCOUNT FEATURES
===================================================== */

/* ======================
   GET LOGGED-IN USER
====================== */
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   GET WISHLIST
====================== */
router.get("/wishlist", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.wishlist || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   ADD TO WISHLIST
====================== */
router.post("/wishlist", protect, async (req, res) => {
  try {
    const { product } = req.body;

    const user = await User.findById(req.user.id);

    if (!user.wishlist) user.wishlist = [];

    user.wishlist.push(product);

    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ======================
   REMOVE FROM WISHLIST
====================== */
router.delete("/wishlist/:index", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    user.wishlist.splice(req.params.index, 1);

    await user.save();

    res.json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;