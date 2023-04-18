const express = require('express')
const router = express.Router()
const checkDup = require("../middlewares/error.js") 
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
router.put("/update-admin", isAdmin, Table.updateAdminPass);
router.put("/update-user", Table.UpdateUser);
router.put("/update-reward", Table.UpdatReward);


router.put("/update-comment", Table.UpdateComment);
router.put("/update-complain", Table.UpdateComplain);



router.put("/update-feedback", Table.updateFeedback);
router.put("/update-item", Table.updateItem);
router.put("/update-like", Table.updateLikes);


//Retreiveing Data
router.get("/search-admin", Table.GetAdmin);
router.get("/search-user", Table.GetUser);
router.get("/search-reward", Table.GetReward);


router.get("/search-chat", Table.GetChat);
router.get("/search-comment", Table.GetComment);
router.get("/search-complain", Table.GetComplain);



router.get("/search-feedback", Table.GetFeedback);
router.get("/search-item", Table.GetItem);
router.get("/search-like", Table.GetLikes);

//Deleting Data
router.delete("/del-admin", Table.DeleteAdmin);
router.delete("/del-user", Table.DeleteUser);
router.delete("/del-reward", Table.DeleteReward);


router.delete("/del-chat", Table.DeleteChat);
router.delete("/del-complain", Table.DeleteComplain);
router.delete("/del-comment", Table.DeleteComment);



router.delete("/del-feedback", Table.DeleteFeedback);
router.delete("/del-like", Table.DeleteLike);
router.delete("/del-item", Table.DeleteItem);


//Pagination
router.get("/itempage",Table.itemPagination)



//Filtering
router.get("/filterItem",Table.filterItems)



//Error


router.get('*',function(req,res){

    res.send('Bhai Kidhar??',404);
})


module.exports = router;
