const express = require('express')
const router = express.Router()

//Autharization
const {isAdmin} = require("../middlewares/auth.middle")


const Table = require("../controllers/db.controller");

// Create a new Table And Add Data
router.post("/add-admin", Table.addInAdminTable);
router.post("/add-user", Table.addInUserTable);
router.post("/add-reward", Table.addinRewardTable);

router.post("/add-chat", Table.addinChatTable);
router.post("/add-comment", Table.addinCommentTable);
router.post("/add-complain", Table.addinComplainTable);


router.post("/add-feedback", Table.addinFeedbackTable);
router.post("/add-item", Table.addinItemTable);
router.post("/add-like", Table.addinLikeTable);



//Updating Data
//Adding Authorization
router.post("/update-admin", isAdmin, Table.updateAdminPass);
router.post("/update-user", Table.UpdateUser);
router.post("/update-reward", Table.UpdatReward);


router.post("/update-comment", Table.UpdateComment);
router.post("/update-complain", Table.UpdateComplain);



router.post("/update-feedback", Table.updateFeedback);
router.post("/update-item", Table.updateItem);
router.post("/update-like", Table.updateLikes);


//Retreiveing Data
router.post("/search-admin", Table.GetAdmin);
router.post("/search-user", Table.GetUser);
router.post("/search-reward", Table.GetReward);


router.post("/search-chat", Table.GetChat);
router.post("/search-comment", Table.GetComment);
router.post("/search-complain", Table.GetComplain);



router.post("/search-feedback", Table.GetFeedback);
router.post("/search-item", Table.GetItem);
router.post("/search-like", Table.GetLikes);

//Deleting Data
router.post("/del-admin", Table.DeleteAdmin);
router.post("/del-user", Table.DeleteUser);
router.post("/del-reward", Table.DeleteReward);


router.post("/del-chat", Table.DeleteChat);
router.post("/del-complain", Table.DeleteComplain);
router.post("/del-comment", Table.DeleteComment);



router.post("/del-feedback", Table.DeleteFeedback);
router.post("/del-like", Table.DeleteLike);
router.post("/del-item", Table.DeleteItem);


module.exports = router;
