const {
  saveUser,
  updateUser,
  getAllUsers,
  getUserById,
  login,
  saveTransaction,
  payDues,
} = require("../controllers/userController");
const {
  validateSchema,
  validateUpdateSchema,
  checkReqiuredDataToUpdate,
  loginValidation,
  validateNewTransactionSchema,
  creditRequest,
  debitRequest,
  shoppingRequest,
  validateDuesPaymentRequest,
} = require("../middlewares/userMiddleware");

module.exports = (router) => {
  router.post("/user/register", validateSchema, saveUser);
  router.patch(
    "/user/:id/update",
    checkReqiuredDataToUpdate,
    validateUpdateSchema,
    updateUser
  );
  router.get("/users", getAllUsers);
  router.get("/user/:id", getUserById);
  router.post("/login", loginValidation, login);
  router.patch(
    "/transaction/credit",
    validateNewTransactionSchema,
    creditRequest,
    saveTransaction
  );
  router.patch(
    "/transaction/debit",
    validateNewTransactionSchema,
    debitRequest,

    saveTransaction
  );
  router.patch(
    "/transaction/shopping",
    validateNewTransactionSchema,
    shoppingRequest,
    saveTransaction
  );
  router.patch(
    "/pay/dues",
    validateDuesPaymentRequest,
    payDues
  );
  return router;
};
