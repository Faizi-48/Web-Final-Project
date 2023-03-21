
const sequelize = require("../config/db.config")
const express = require('express')
const app = express()

const Admin = require("../models/admin.model")
const User = require("../models/user.model")
const Reward = require("../models/reward.model")

const Chat = require("../models/chat.model")
const Complain = require("../models/complain.model")
const Comment = require("../models/comment.model")


const Address = require("ipaddr.js")



////---------------------ADD----------------
const addInAdminTable = (req , res) =>
{
    console.log( "body" , req.body.id);
 sequelize.sync().then(() => {
    console.log('Admin Table Created!');
 
    Admin.create({
        username: req.body.id,
        password: req.body.pass
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to create a new record : ', error);
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });


 

}

const addInUserTable = (req , res) =>
{
sequelize.sync().then(() => {
    console.log('User Table Created!');
 
    User.create({
        username: req.body.name,
        password: req.body.pass,
        contact: req.body.number,
        email: req.body.mail,
        address: req.body.home,
        zipcode:req.body.code
    }).then(rs => {
        console.log(rs)
        res.send("saved")
    }).catch((error) => {
        console.error('Failed to Add User   : ', error);
        res.send("error")
    });
 
 }).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")

 });

}

const addinRewardTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Reward Table Created!');
     
        Reward.create({
            reward_id: req.body.id,
            reward_fee: req.body.fee,
            item_id: req.body.item,
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to Add Reward: ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create Table : ', error);
        res.send(" Table error")
     });
     

}



const addinChatTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Chat Table Created!');
     
        Chat.create({
            chat_id: req.body.id,
            user1: req.body.u1,
            user2: req.body.u2,
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to Connect Chat: ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create Table : ', error);
        res.send(" Table error")
     });
     

}



const addinCommentTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Comment Table Created!');
     
        Comment.create({
            comment_id: req.body.id,
            user_id: req.body.userid,
            item_id: req.body.itemId,
            comment:req.body.comm,
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to Add Comment: ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create Table : ', error);
        res.send(" Table error")
     });
     

}



const addinComplainTable = (req , res) =>
{
    sequelize.sync().then(() => {
        console.log('Complain Table Created!');
     
        Complain.create({
            complain_id: req.body.id,
            user_id: req.body.userid,
            description:req.body.desc,
        }).then(rs => {
            console.log(rs)
            res.send("saved")
        }).catch((error) => {
            console.error('Failed to Add Complain: ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create Table : ', error);
        res.send(" Table error")
     });
     

}





//////--------------------------delete--------------------
const DeleteUser = (req , res) =>
{sequelize.sync().then(() => {

    User.destroy({
        where: {
          username: req.body.id
        }
    }).then(() => {
        console.log("User Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Unable to delete record : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("Table error")
  });

}



const DeleteAdmin = (req , res) =>
{sequelize.sync().then(() => {

    Admin.destroy({
        where: {
          username: req.body.id
        }
    }).then(() => {
        console.log("Admin Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete Admin : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("Table error")
  });

}


const DeleteReward = (req , res) =>
{sequelize.sync().then(() => {

    Reward.destroy({
        where: {
          reward_id: req.body.r_id
        }
    }).then(() => {
        console.log("Reward Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete Reward : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}



const DeleteChat= (req , res) =>
{sequelize.sync().then(() => {

    Chat.destroy({
        where: {
          chat_id: req.body.r_id
        }
    }).then(() => {
        console.log("Chat Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete Chat : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const DeleteComment = (req , res) =>
{sequelize.sync().then(() => {

    Comment.destroy({
        where: {
          comment_id: req.body.r_id
        }
    }).then(() => {
        console.log("Comment Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete Comment : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}


const DeleteComplain = (req , res) =>
{sequelize.sync().then(() => {

    Complain.destroy({
        where: {
          complain_id: req.body.r_id
        }
    }).then(() => {
        console.log("Complain Successfully Deleted.")
        res.send("deleted")
    }).catch((error) => {
        console.error('Failed to delete Complain : ', error);
        res.send("error")
    });
  
  }).catch((error) => {
      console.error('Unable to create table : ', error);
      res.send("table error")
  });

}





/////////----------------------UPDATE------------------
const updateAdminPass = (req , res) =>
{
sequelize.sync().then(() =>
{
    Admin.update(
        {
            password: req.body.pass,
        },
        {
            where:{ username : req.body.id},
        }
    ).then(() =>{
         console.log(" Admin Updated ")
         res.send("updated")
    }).catch((error) =>
    {console.error(" error update " , error);
    res.send("error");
    });
    
    }).catch((error) => {
        console.error('table not create : ', error);
        res.send("table error")
});

}


const UpdateUser = (req , res) =>
{
    sequelize.sync().then(() =>{
    user.update(
        {
            password: req.body.id,
        },
        {
            where:{ username : req.body.name},
        }
    ).then(() =>{
         console.log(" User Data Updated ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error");
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error");
});

}


const UpdatReward = (req , res) =>
{
    sequelize.sync().then(() =>{
    Reward.update(
        {
            reward_fee: req.body.fee,
        },
        {
            where:{ reward_id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}


const UpdateComment = (req , res) =>
{
    sequelize.sync().then(() =>{
    Comment.update(
        {
            comment: req.body.desc,
        },
        {
            where:{ comment_id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}


const UpdateComplain = (req , res) =>
{
    sequelize.sync().then(() =>{
    Complain.update(
        {
            description: req.body.desc,
        },
        {
            where:{ complain_id : req.body.id},
        }
    ).then(() =>{
         console.log(" upadted data ")
         res.send("updated")
    }).catch((error) =>
    {
        console.error(" error update " , error);
        res.send("error")
    });
    
    }).catch((error) => {
        console.error('cannot update : ', error);
        res.send("table error")
});
}





////-------------------Retrive------------------

const GetUser = (req , res) =>
{
sequelize.sync().then(() => {

    User.findOne({
        where: {
            username : req.body.name
        }
    }).then(rs => {
        console.log(rs)
        res.send("Retrieved Data")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});


}

const GetReward= (req , res) =>
{
sequelize.sync().then(() => {

    Reward.findOne({
        where: {
            reward_id : req.body.id
        }
    }).then(rs => {
        console.log(rs)
        res.send("Retrieved Data")
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
        res.send("error")
    });

}).catch((error) => {
    console.error('Unable to create table : ', error);
    res.send("table error")
});

}


const GetAdmin= (req , res) =>
{
    sequelize.sync().then(() => {

        Admin.findOne({
            where: {
                username : req.body.name
            }
        }).then(rs => {
            console.log(rs)
            res.send("Data Reterived")
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}



const GetChat= (req , res) =>
{
    sequelize.sync().then(() => {

        Chat.findOne({
            where: {
                chat_id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("Chat Reterived")
        }).catch((error) => {
            console.error('Failed to retrieve Chat : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}


const GetComment= (req , res) =>
{
    sequelize.sync().then(() => {

        Comment.findOne({
            where: {
                comment_id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("Comment Reterived")
        }).catch((error) => {
            console.error('Failed to retrieve Comment : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}


const GetComplain= (req , res) =>
{
    sequelize.sync().then(() => {

        Complain.findOne({
            where: {
                complain_id : req.body.id
            }
        }).then(rs => {
            console.log(rs)
            res.send("Complain Reterived")
        }).catch((error) => {
            console.error('Failed to retrieve Complain : ', error);
            res.send("error")
        });
     
     }).catch((error) => {
        console.error('Unable to create table : ', error);
        res.send("table error")
     });

}





module.exports = {addInUserTable , addInAdminTable , addinRewardTable,
GetAdmin,GetReward,GetUser,DeleteAdmin,DeleteUser,DeleteReward,UpdatReward,
updateAdminPass,UpdateUser,addinChatTable,addinCommentTable,addinComplainTable,
GetChat,GetComment,GetComplain,DeleteChat,DeleteComment,DeleteComplain,UpdateComment,
UpdateComplain
}