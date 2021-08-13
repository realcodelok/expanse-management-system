exports.bankSchemaObj = {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  slug: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    index: true,
  },
  ownerName: {
    type: String,
    trim: true,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
};
