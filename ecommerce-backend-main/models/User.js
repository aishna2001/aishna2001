import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["customer", "owner", "admin", "superadmin"],
      default: "customer",
    },

    // used by super admin to disable admins
    status: {
      type: String,
      enum: ["Active", "Disabled"],
      default: "Active",
    },

    /* ======================
       WISHLIST (NEW)
    ====================== */
    wishlist: [
      {
        productId: String,
        name: String,
        price: Number,
        image: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);