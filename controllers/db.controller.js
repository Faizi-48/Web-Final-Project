
const sequelize = require("../config/db.config")
const express = require('express')
const app = express()
const Token = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler.js");
const {Op} = require("sequelize");

const Admin = require("../models/admin.model")
const User = require("../models/user.model")
const Reward = require("../models/reward.model")

const Chat = require("../models/chat.model")
const Complain = require("../models/complain.model")
const Comment = require("../models/comment.model")



const Feedback = require("../models/feedback.model")
const Item = require("../models/item.model")
const Like = require("../models/like.model")



const Address = require("ipaddr.js")



////---------------------ADD----------------
const addInAdminTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Admin table created successfully!");
  
      const admin = await Admin.create({
        username: req.body.id,
        password: req.body.pass
      });
      console.log(admin);
      res.send(admin);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };




  const addInUserTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Users table created successfully!");
  
      const user = await User.create({
        username: req.body.name,
        password: req.body.pass,
        contact: req.body.number,
        email: req.body.mail,
        address: req.body.home,
        zipcode:req.body.code
      });
      console.log(user);
      res.send(user);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };



  const addinChatTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Chat table created successfully!");
  
      const chat = await Chat.create({
        chat_id: req.body.id,
        user1: req.body.u1,
        user2: req.body.u2,
      });
      console.log(chat);
      res.send(chat);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };



  const addinCommentTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Chat table created successfully!");
  
      const comment = await Comment.create({
        comment_id: req.body.id,
        user_id: req.body.userid,
        item_id: req.body.itemId,
        comment:req.body.comm,
      
      });
      console.log(comment);
      res.send(comment);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };


  const addinComplainTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const complain = await Complain.create({
        complain_id: req.body.id,
        user_id: req.body.userid,
        description:req.body.desc,
      
      });
      console.log(complain);
      res.send(complain);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };




  const addinFeedbackTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const feedback = await Feedback.create({
        f_id: req.body.id,
        user_id: req.body.userid,
        description:req.body.desc,
      
      });
      console.log(feedback);
      res.send(feedback);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };



  const addinItemTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const item = await Item.create({
        item_id: req.body.id,
        user_id: req.body.userid,
        item_name:req.body.name,
        location:req.body.loc,
        brand:req.body.brand,
        color:req.body.colour,
        description:req.body.desc,
        status:req.body.stts,
        date:req.body.date,
        image:req.body.img,
      
      });
      console.log(item);
      res.send(item);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };


  const addinRewardTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const reward = await Reward.create({
            reward_id: req.body.id,
            reward_fee: req.body.fee,
            item_id: req.body.item,
      });
      console.log(reward);
      res.send(reward);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };




  const addinLikeTable = async function(req, res) {
    try {
      await sequelize.sync();
      console.log("Complain table created successfully!");
  
      const like = await Like.create({
        id: req.body.l_id,
        item_id: req.body.i_id,
        user_id: req.body.userid,
        likes:req.body.like,
        dislike:req.body.dislikes,
      });
      console.log(like);
      res.send(like);
    } catch (error) {
      console.error("Failed to create a new record : ", error);
      res.status(500).send(error.message);
    }
  };





//////--------------------------Delete--------------------

const DeleteUser = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        User.destroy({
          where: {
            username: req.body.id,
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 




  const DeleteAdmin = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Admin.destroy({
          where: {
            username: req.body.id
          },
        })
          .then((data) => {
            console.log("data"+data)
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 



  const DeleteReward = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Reward.destroy({
          where: {
            reward_id: req.body.r_id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 




  const DeleteChat = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Chat.destroy({
          where: {
            chat_id: req.body.id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 



  const DeleteComment = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Comment.destroy({
          where: {
            comment_id: req.body.id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 



  const DeleteComplain = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Complain.destroy({
          where: {
            complain_id: req.body.r_id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 





  const DeleteFeedback  = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Feedback.destroy({
          where: {
            f_id: req.body.id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 


  const DeleteItem  = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Item.destroy({
          where: {
            item_id: req.body.id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }; 




  const DeleteLike  = (req, res) => {
    sequelize
      .sync()
      .then(() => {
        Like.destroy({
          where: {
            id: req.body.r_id
          },
        })
          .then((data) => {
            if (!data) {
              console.log("Data With This ID Not Found ");
              res.send(new error("Invalid ID" , 400))
            }
            else
            {
            console.log("Successfully deleted record.");
            res.send("Deleted");
            }
          })
          .catch((error) => {
            console.error("Failed to delete record : ", error);
            res.send("error");
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
        res.send("table error");
      });
  }





/////////----------------------UPDATE------------------

const updateAdminPass = async function(req, res) {
    try {
      await sequelize.sync();
  
      const admin = await Admin.update(
        {
            password: req.body.pass,
        },
        {
            where:{ username : req.body.id},
        });
      console.log(admin);
      res.send(admin);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };




const UpdateUser = async function(req, res) {
    try {
      await sequelize.sync();
  
      const user = await User.update(
        {
            password: req.body.pass,
        },
        {
            where:{ username : req.body.name},
        });
      console.log(user);
      res.send(user);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };


  const UpdatReward = async function(req, res) {
    try {
      await sequelize.sync();
  
      const reward = await Reward.update(
        {
            reward_fee: req.body.fee,
        },
        {
            where:{ reward_id : req.body.id},
        });
      console.log(reward);
      res.send(reward);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };

  const UpdateComment = async function(req, res) {
    try {
      await sequelize.sync();
  
      const comment = await Comment.update(
        {
            comment: req.body.desc,
        },
        {
            where:{ comment_id : req.body.id},
        });
      console.log(comment);
      res.send(comment);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };



  const UpdateComplain = async function(req, res) {
    try {
      await sequelize.sync();
  
      const complain = await Complain.update(
        {
            description: req.body.desc,
        },
        {
            where:{ complain_id : req.body.id},
        });
      console.log(complain);
      res.send(complain);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };





  const updateFeedback = async function(req, res) {
    try {
      await sequelize.sync();
  
      const feedback = await Feedback.update(
        {
            description: req.body.desc,
        },
        {
            where:{ f_id : req.body.id},
        });
      console.log(feedback);
      res.send(feedback);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };




  const updateItem = async function(req, res) {
    try {
      await sequelize.sync();
  
      const item = await Item.update(
        {
            item_name: req.body.name,
        },
        {
            where:{ item_id : req.body.id},
        });
      console.log(item);
      res.send(item);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };



  const updateLikes = async function(req, res) {
    try {
      await sequelize.sync();
  
      const like = await Like.update(
        {
            likes: req.body.like,
        },
        {
            where:{ id : req.body.id},
        });
      console.log(like);
      res.send(like);
    } catch (error) {
      console.error("Failed to Update Record : ", error);
      res.status(500).send(error.message);
    }
  };





////-------------------Retrive------------------



const GetUser = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await User.findOne({
          where: {
            username : req.body.name
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };

  

  const GetReward = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Reward.findOne({
          where: {
            reward_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };



  const GetAdmin = async (req, res) => {
        try{
          await sequelize
          .sync()
          .then(async() => {
              await Admin.findOne({
              where: {
                username : req.body.name
              }
            })
              .then((data) => {
                if(!data)
                {
                  res.send(new errorHandler("Cannot Find Data " , 404))
                }
                else{
                console.log("Data Found.");
                var token = Token.sign({username : req.body.name , Role : "admin"}, 'abcdef')
                //console.log(token)
                res.status(200).send(data,{ 
                    username: token.username,
                    roles: token.Role,
                    accessToken: token
                  });
                }
              })
              .catch((error) => {
                console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
              });
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
          });
        }catch{
          console.error("Failed to Get record : ", error);
          res.status(500).send(error.message);
        }
      };
    


  const GetChat = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Chat.findOne({
          where: {
            chat_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };


  const GetComment = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Comment.findOne({
          where: {
            comment_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };


  const GetComplain = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Complain.findOne({
          where: {
            complain_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };



  const GetFeedback = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Feedback.findOne({
          where: {
            f_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };



  const GetItem = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Item.findOne({
          where: {
            item_id : req.body.id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };


  const GetLikes = async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
          await Like.findOne({
          where: {
            id : req.body.l_id
          }
        })
          .then((data) => {
            if(!data)
            {
              res.send(new errorHandler("Cannot Find Data " , 404))
            }
            else{
            console.log("Data Found.");
            res.status(200).send(data);
            }
          })
          .catch((error) => {
            console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to Get record : ", error);
      res.status(500).send(error.message);
    }
  };

//Pagination

const getPagination = (page) => {
    const limit = 5;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };
  
  const itemPagination = (req, res) => {
     const { page } = req.query;
     const { limit, offset } = getPagination(page);
    sequelize
      .sync()
      .then(() => {
        Item.findAll( { limit , offset})
          .then((data) => {      
            res.send(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("Failed to retrieve Items : ", error);
          });
      })
      .catch((error) => {
        console.error("Unable to create table : ", error);
      });
  };


  //Filter Items
 

  const filterItems = async (req, res) => {
  try{
    await sequelize
    .sync()
    .then(async() => {
        await Item.findAll({
        where: {
          price: {
            [Op.between]: [ req.body.fromid, req.body.toid]
          }
        }
      })
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("Cannot Filter data " , 404))
          }
          else{
          console.log("Data Filtered.");
          res.status(200).send(data);
          }
        })
        .catch((error) => {
          console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to filter record : ", error);
    res.status(500).send(error.message);
  }
};




module.exports = {addInUserTable , addInAdminTable , addinRewardTable,
GetAdmin,GetReward,GetUser,DeleteAdmin,DeleteUser,DeleteReward,UpdatReward,
updateAdminPass,UpdateUser,addinChatTable,addinCommentTable,addinComplainTable,
GetChat,GetComment,GetComplain,DeleteChat,DeleteComment,DeleteComplain,UpdateComment,
UpdateComplain,addinFeedbackTable,addinItemTable,addinLikeTable,GetFeedback,GetItem,
GetLikes,updateFeedback,updateItem,updateLikes,DeleteFeedback,DeleteItem,DeleteLike,
itemPagination,filterItems
}