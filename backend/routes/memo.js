// 새로운 라우터 생성
var express = require("express");
var router = express.Router();
// json 데이터 들고 옴
const memos = require("../memo.json");

router.get("/", function (req, res, next) {
  console.log(memos);
  res.send(memos);
});

module.exports = router;
