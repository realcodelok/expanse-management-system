const { BankModel } = require("../models");
const { defaultBank, statusCodes, messages } = require("../utils/constants");

exports.updateBankAmount = async (amount, type) => {
  try {
    if (isNaN(amount)) {
      return {
        message: messages.amountNotANumber,
        status: statusCodes.unproccessible,
      };
    }
    const bank = await BankModel.findOne({
      slug: defaultBank.slug,
    });
    if (!bank) {
      return {
        message: messages.bankNotExists,
        status: statusCodes.notFound,
      };
    }
    let bankAmount = bank.totalAmount ? bank.totalAmount : 0;
    if (["CREDIT"].includes(type)) {
      bankAmount += amount;
    } else if (["DEBIT", "SHOPPING"].includes(type)) {
      bankAmount -= amount;
    }
    bank.totalAmount = bankAmount;
    const updatedAmount = await bank.save();
    if (updatedAmount)
      return {
        message: messages.amountUpdated,
        status: statusCodes.noContent,
      };

    return {
      message: messages.bankAmountNotUpdated,
      status: statusCodes.internalServerError,
    };
  } catch (e) {
    const { path } = e;
    if (path) {
      e.message = messages.invalidUserId;
    }
    return e;
  }
};
