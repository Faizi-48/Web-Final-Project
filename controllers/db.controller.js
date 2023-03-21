
const sequelize = require("../config/db.config")
const express = require('express')
const app = express()
const Admin = require("../models/admin.model")
const User = require("../models/user.model")
const Reward = require("../models/reward.model")



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



// //////--------------------------delete--------------------
// const deleteFomUser = (req , res) =>
// {sequelize.sync().then(() => {

//     User.destroy({
//         where: {
//           id: 1
//         }
//     }).then(() => {
//         console.log("Successfully deleted record.")
//         res.send("deleted")
//     }).catch((error) => {
//         console.error('Failed to delete record : ', error);
//         res.send("error")
//     });
  
//   }).catch((error) => {
//       console.error('Unable to create table : ', error);
//       res.send("table error")
//   });

// }



// const deleteFomCars = (req , res) =>
// {sequelize.sync().then(() => {

//     Cars.destroy({
//         where: {
//           id: 1
//         }
//     }).then(() => {
//         console.log("Successfully deleted record.")
//         res.send("deleted")
//     }).catch((error) => {
//         console.error('Failed to delete record : ', error);
//         res.send("error")
//     });
  
//   }).catch((error) => {
//       console.error('Unable to create table : ', error);
//       res.send("table error")
//   });

// }


// const deleteFomSpareParts = (req , res) =>
// {sequelize.sync().then(() => {

//     spareParts.destroy({
//         where: {
//           id: 1
//         }
//     }).then(() => {
//         console.log("Successfully deleted record.")
//         res.send("deleted")
//     }).catch((error) => {
//         console.error('Failed to delete record : ', error);
//         res.send("error")
//     });
  
//   }).catch((error) => {
//       console.error('Unable to create table : ', error);
//       res.send("table error")
//   });

// }



// /////////----------------------UPDATE------------------
// const upadteSpareParts = (req , res) =>
// {
// sequelize.sync().then(() =>
// {
//     spareParts.update(
//         {
//             model: 2017,
//         },
//         {
//             where:{ id : 1},
//         }
//     ).then(() =>{
//          console.log(" upadted data ")
//          res.send("updated")
//     }).catch((error) =>
//     {console.error(" error update " , error);
//     res.send("error");
//     });
    
//     }).catch((error) => {
//         console.error('table not create : ', error);
//         res.send("table error")
// });

// }


// const upadteCars = (req , res) =>
// {
//     sequelize.sync().then(() =>{
//     Cars.update(
//         {
//             price: 8000000,
//         },
//         {
//             where:{ id : 2},
//         }
//     ).then(() =>{
//          console.log(" upadted data ")
//          res.send("updated")
//     }).catch((error) =>
//     {
//         console.error(" error update " , error);
//         res.send("error");
//     });
    
//     }).catch((error) => {
//         console.error('cannot update : ', error);
//         res.send("table error");
// });

// }


// const upadteUsers = (req , res) =>
// {
//     sequelize.sync().then(() =>{
//     User.update(
//         {
//             UserID: 4111,
//         },
//         {
//             where:{ id : 1},
//         }
//     ).then(() =>{
//          console.log(" upadted data ")
//          res.send("updated")
//     }).catch((error) =>
//     {
//         console.error(" error update " , error);
//         res.send("error")
//     });
    
//     }).catch((error) => {
//         console.error('cannot update : ', error);
//         res.send("table error")
// });
// }

// ////-------------------Retrive------------------

// const retriveteUsers = (req , res) =>
// {
// sequelize.sync().then(() => {

//     User.findOne({
//         where: {
//             id : "1"
//         }
//     }).then(rs => {
//         console.log(rs)
//         res.send("data get")
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//         res.send("error")
//     });

// }).catch((error) => {
//     console.error('Unable to create table : ', error);
//     res.send("table error")
// });


// }

// const retriveteCars= (req , res) =>
// {
// sequelize.sync().then(() => {

//     User.findOne({
//         where: {
//             id : "1"
//         }
//     }).then(rs => {
//         console.log(rs)
//         res.send("data get")
//     }).catch((error) => {
//         console.error('Failed to retrieve data : ', error);
//         res.send("error")
//     });

// }).catch((error) => {
//     console.error('Unable to create table : ', error);
//     res.send("table error")
// });

// }


// const retriveteSpareParts= (req , res) =>
// {
//     sequelize.sync().then(() => {

//         User.findOne({
//             where: {
//                 id : "1"
//             }
//         }).then(rs => {
//             console.log(rs)
//             res.send("data get")
//         }).catch((error) => {
//             console.error('Failed to retrieve data : ', error);
//             res.send("error")
//         });
     
//      }).catch((error) => {
//         console.error('Unable to create table : ', error);
//         res.send("table error")
//      });

// }




module.exports = {addInUserTable , addInAdminTable , addinRewardTable}
// deleteFomCars , deleteFomSpareParts , deleteFomUser,
// upadteCars , upadteSpareParts , upadteUsers,
// retriveteCars , retriveteSpareParts , retriveteUsers
// }