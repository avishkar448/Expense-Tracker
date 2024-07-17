const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{ 
      type:String,
      required:true
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    refernce: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

mongoose.pluralize(null);

module.exports = mongoose.model("Transactions", transactionSchema);
