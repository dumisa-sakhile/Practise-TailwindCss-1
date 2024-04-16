const router = require("express").Router();

const {
  home,
  about,
  skills,
  contact,
} = require("../controllers/defaultController");

router.get("/",home);

router.get("/about",about);


router.get("/contact",contact);


router.get("/skills", skills);

module.exports = router;