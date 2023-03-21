const express = require('express')
const router = express.Router()



const Table = require("../controllers/db.controller");

// Create a new Tutorial
router.post("/add-admin", Table.addInAdminTable);
router.post("/add-user", Table.addInUserTable);
router.post("/add-reward", Table.addinRewardTable);

// // Retrieve all Tutorials
// router.get("/", tutorials.findAll);

// // Retrieve all published Tutorials
// router.get("/published", tutorials.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", tutorials.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorials.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorials.delete);

// // Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

module.exports = router;
