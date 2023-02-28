const express = require("express");
const router = express.Router();
const { getLineData } = require("../app");

// router.get("/:line", async (req, res) => {
//   const line = req.params.line;
//   const data = await getLineData(line);
//   res.send(data);
//   res.sendStatus(200);
// });

module.exports = router;
