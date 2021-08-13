const mongoose = require("mongoose");
exports.userSchemaObj = {
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 50,
    trim: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "countries",
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  deactivated_at: {
    type: Date,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  sessions: [
    {
      token: {
        type: String,
        required: true,
      },
      expiresAt: {
        type: Number,
        required: true,
      },
    },
  ],
  transactions: [
    {
      amount: {
        type: Number,
        required: true,
        min: 1,
      },
      type: {
        type: String,
        enum: ["CREDIT", "DEBIT", "SHOPPING"],
        default: "CREDIT",
      },
      description: {
        type: String,
        trim: true,
        required: true,
      },
      comment: {
        type: String,
        trim: true,
      },
      admin: {
        // role = 'ADMIN'
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      transactionDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  duesAmounts: [
    {
      amount: {
        type: Number,
      },
      description: {
        type: String,
        trim: true,
        required: true,
      },
      comment: {
        type: String,
        trim: true,
      },
      status: {
        type: String,
        enum: ["DUES", "PAID"],
        default: "DUES",
      },
      admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
      },
      duesDate: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
};
