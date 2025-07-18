const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const {fileController} = require("../controllers")
const upload = require("../middlewares/upload");
const { getSignUrl } = require("../controllers/file");


router.post("/upload",isAuth,upload.single("image"),fileController.uplaodFile);

router.get("/signed-url",isAuth,fileController.getSignedUrl)

router.delete("/delete-file", isAuth,fileController.deleteFile)

module.exports = router;
