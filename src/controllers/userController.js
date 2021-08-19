const { _copy } = require("../helpers/helpers");
const { UserModel } = require("../models");
const {
  statusCodes,
  messages,
  paymentStatus,
  transactionTypes,
} = require("../utils/constants");
const { updateBankAmount } = require("../services/bankService");

exports.saveUser = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber, country } = req.body;
    const savedUser = await new UserModel({
      name,
      email,
      password,
      phoneNumber,
      country,
    }).save();
    if (savedUser) {
      return res
        .status(statusCodes.created)
        .json({ message: messages.userCreated, user: _copy(savedUser) });
    }
    return next({
      message: messages.userNotCreated,
    });
  } catch (e) {
    if (e && e.code === 11000) {
      e.status = statusCodes.success;
      e.message = messages.userAlreadyExists;
    }
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: req.body.id },
      req.body
    );
    if (updatedUser) {
      return res.status(statusCodes.noContent).send();
    }
    return next({
      message: messages.userNotExists,
      status: statusCodes.notFound,
    });
  } catch (e) {
    const { path } = e;
    if (path) {
      e.message = messages.invalidUserId;
    }
    next(e);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await UserModel.findA({});
    return res
      .status(statusCodes.success)
      .json({ users: _copy(users), message: messages.allUsersFetched });
  } catch (e) {
    next(e);
  }
};
exports.getUserById = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });
    if (user)
      return res
        .status(statusCodes.success)
        .json({ users: _copy(user.toJSON()), message: messages.userFetched });
    return next({
      message: messages.userNotExists,
      status: statusCodes.notFound,
    });
  } catch (e) {
    const { path } = e;
    if (path) {
      e.message = messages.invalidUserId;
    }
    return next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findByCredentials(email, password);
    if (!user) {
      return next({
        message: messages.wrongCredentials,
        status: statusCodes.unauthorized,
      });
    }
    if (!user.is_active) {
      return next({ message: messages.accountDisabled });
    }
    const { refreshToken, refreshAuthTokenError, saveSessionError } =
      await user.createSession();
    if (refreshAuthTokenError || !refreshToken) {
      return next({
        status: statusCodes.internalServerError,
        message: messages.refreshAuthTokenNotGenerated,
      });
    }
    if (saveSessionError) {
      return next({
        status: statusCodes.internalServerError,
        message: messages.sessionCouldNotSaved,
      });
    }

    const { accessToken, accessAuthTokenError } =
      await user.generateAccessAuthToken();
    if (accessAuthTokenError || !accessToken) {
      return next({
        status: statusCodes.internalServerError,
        message: messages.accessTokenNotGenerated,
      });
    }

    return res
      .header("x-refresh-token", refreshToken)
      .header("x-access-token", accessToken)
      .status(statusCodes.success)
      .json({
        message: messages.authenticated,
        user,
      });
  } catch (e) {
    if (e.status === statusCodes.notFound) {
      e.message = messages.userNotExists;
      return next(e);
    }
    const { path } = e;
    if (path) {
      e.message = messages.invalidUserId;
    }
    return next(e);
  }
};

exports.saveTransaction = async (req, res, next) => {
  try {
    const { userId, amount, type, admin, description, comment } = req.body;
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return next({
        message: messages.userNotExists,
        status: statusCodes.notFound,
      });
    }

    if (user.transactions) {
      user.transactions.push({ amount, type, admin, description, comment });
    } else {
      user.transactions = [{ amount, type, admin, description, comment }];
    }

    //check for debit ( if debit then store debit details to user as due prices )
    const userDuesAmounts = user.duesAmounts ? user.duesAmounts : [];
    if (["DEBIT"].includes(type)) {
      userDuesAmounts.push({
        amount,
        description,
        comment,
        status: paymentStatus.dues,
        admin,
      });
      user.duesAmounts = userDuesAmounts;
    }

    const updatedUser = await user.save();
    if (!updatedUser) {
      return next({
        message: messages.transactionFailed,
        status: statusCodes.internalServerError,
      });
    }

    const updateBankTotalAmount = await updateBankAmount(amount, type);
    const { status } = updateBankTotalAmount;
    if (status !== statusCodes.noContent) {
      return next(updateBankTotalAmount);
    }

    return res.status(statusCodes.noContent).send();
  } catch (e) {
    const { path } = e;
    if (path) {
      e.message = messages.invalidUserId;
    }
    next(e);
  }
};

exports.payDues = async (req, res, next) => {
  try {
    const { userId, duesId } = req.body;
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return next({
        message: messages.userNotExists,
        status: statusCodes.notFound,
      });
    }
    const dues = user.duesAmounts.id(duesId);
    if (!dues) {
      return next({
        message: messages.duesNotExists,
        status: statusCodes.notFound,
      });
    }
    const { status } = dues;
    if ([paymentStatus.paid].includes(status)) {
      return next({
        message: messages.duesAlreadyPaid,
        status: statusCodes.success,
      });
    }
    dues.set({
      status: paymentStatus.paid,
      updatedAt: new Date(),
    });
    const updatedDues = await user.save();
    if (!updatedDues) {
      return next({
        message: messages.duesNotPaid,
        status: statusCodes.internalServerError,
      });
    }
    const updateBankTotalAmount = await updateBankAmount(
      dues.amount,
      transactionTypes.credit
    );
    if (updateBankTotalAmount.status !== statusCodes.noContent) {
      return next(updateBankTotalAmount);
    }
    return next({
      message: messages.duesPaid,
      status: statusCodes.noContent,
    });
  } catch (e) {
    const { path } = e;
    if (path) {
      e.message = messages.invalidId;
    }
    next(e);
  }
};
