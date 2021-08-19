const { addBank } = require("../controllers/bankController");

module.exports = (router) => {
  router.post("/bank/add", addBank);
  return router;
};
