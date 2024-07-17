const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controller/transactionCont");
const router = express.Router();

//add Transansaction
router.post("/add-transaction", addTransaction);

//get Transaction
router.post("/get-transaction", getAllTransaction);

//edit transaction
router.post("/edit-transaction", editTransaction);

//delete transaction
router.post("/delete-transaction", deleteTransaction)
module.exports = router;
