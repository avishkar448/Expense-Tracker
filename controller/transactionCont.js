const transactionModel = require("../models/transactionModel");
const moment = require("moment");

const getAllTransaction = async (req, res) => {
  try {
    const { frequency, seletedDate, type } = req.body;
    const transaction = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: seletedDate[0],
              $lte: seletedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type != "all" && { type }),
    });
    res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error to get-Transaction",
      error,
    });
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send({
      success: true,
      message: "Successfully add transaction!",
      newTransaction,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error to addTransaction",
      error,
    });
  }
};

const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transactionId },
      req.body.payload
    );
    res.status(200).send("Edit successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({ _id: req.body.transactionId });
    res.status(200).send("Transaction Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransaction,
  addTransaction,
  editTransaction,
  deleteTransaction,
};
