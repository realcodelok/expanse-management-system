const { _copy } = require("../helpers/helpers");
const { BankModel } = require("../models");
const { defaultBank, messages, statusCodes } = require("../utils/constants");

exports.addBank = async (req, res, next) => {
  try {
    const savedBank = await new BankModel(defaultBank).save();
    if (savedBank) {
      return res
        .status(statusCodes.created)
        .json({ message: messages.bankAdded, bank: _copy(savedBank) });
    }
    return next({
      message: messages.bankNotAdded,
    });
  } catch (e) {
    if (e && e.code === 11000) {
      e.status = statusCodes.success;
      e.message = messages.bankAlreadyExists;
    }
    next(e);
  }
};
