const express = require('express')
const router = express.Router()



const Table = require("../controllers/db.controller");

// Create a new Table And Add Data
router.post("/add-admin", Table.addInAdminTable);
router.post("/add-user", Table.addInUserTable);
router.post("/add-reward", Table.addinRewardTable);

router.post("/add-chat", Table.addinChatTable);
router.post("/add-comment", Table.addinCommentTable);
router.post("/add-complain", Table.addinComplainTable);


//Updating Data

router.post("/update-admin", Table.updateAdminPass);
router.post("/update-user", Table.UpdateUser);
router.post("/update-reward", Table.UpdatReward);


router.post("/update-comment", Table.UpdateComment);
router.post("/update-complain", Table.UpdateComplain);


//Retreiveing Data
router.post("/search-admin", Table.GetAdmin);
router.post("/search-user", Table.GetUser);
router.post("/search-reward", Table.GetReward);


router.post("/search-chat", Table.GetChat);
router.post("/search-comment", Table.GetComment);
router.post("/search-complain", Table.GetComplain);



//Deleting Data
router.post("/del-admin", Table.DeleteAdmin);
router.post("/del-user", Table.DeleteUser);
router.post("/del-reward", Table.DeleteReward);


router.post("/del-chat", Table.DeleteChat);
router.post("/del-complain", Table.DeleteComplain);
router.post("/del-comment", Table.DeleteComment);



module.exports = router;
