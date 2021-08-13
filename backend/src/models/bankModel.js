const mongoose = require("mongoose");
const { schemaOptions } = require("../helpers/helpers");
const { bankSchemaObj } = require("../schemas/bank");

const bankSchema = new mongoose.Schema(bankSchemaObj, schemaOptions);

module.exports = mongoose.model("banks", bankSchema);
