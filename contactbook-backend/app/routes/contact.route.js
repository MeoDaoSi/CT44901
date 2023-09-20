const express = require("express");
const contacts = require("../controllers/contact.controller")
const router = express.Router();
router.route("/")
    .get(contacts.findA11)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAlLFavorite);

router.route("/:id")
    .get(contacts.findone)
    .put(contacts.update)
    .delete(contacts.delete);

module. exports = router;