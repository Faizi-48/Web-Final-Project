const express = require('express')
const router = express.Router()



const Table = require("../controllers/db.controller");

// Create a new Table And Add Data
router.post("/add-admin", Table.addInAdminTable);
router.post("/add-user", Table.addInUserTable);
router.post("/add-reward", Table.addinRewardTable);

//Retreiveing Data
router.post("/search-admin", Table.GetAdmin);
router.post("/search-user", Table.GetUser);
router.post("/search-reward", Table.GetReward);

//Deleting Data
router.post("/del-admin", Table.DeleteAdmin);
router.post("/del-user", Table.DeleteUser);
router.post("/del-reward", Table.DeleteReward);

module.exports = router;
