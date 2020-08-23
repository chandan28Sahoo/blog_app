const express=require('express');
const knex=require("./knes");
const knex1 = require("./fb_bloger_knex");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router =express.Router();
const jwt=require('jsonwebtoken');
const app=express();
app.use('/',router)
router.use(express.json())


router.get('/',(req,res)=>{
    console.log("databases connected");
})

router.use('/sign_up',router)
require("./fbSign_up")(router,knex,knex1,bcrypt,saltRounds);


router.use('/login', router)
require('./fb_login')(router,knex,jwt);

router.use('/delete',router)
require("./fb_delete")(router,knex,knex1);

router.use('/update',router)
require("./fb_update")(router,knex,knex1);





app.listen(4000,()=>{console.log("port is running on 4000");})



















// {
//     "fname":"chandan",
//     "lname":"sahoo",
//     "username":"chandan",
//     "DOB":"12-5-1997",
//     "age":"24",
//     "gender":"m",
//     "email":"chandan@1gmail.com",
//     "password":"chandan12",
//     "facebook_id":"chandan/fb.com"
// }













































// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       password : 'chandan19',
//       database : 'chandan'
//     }
// });

// var knex1 = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : '127.0.0.1',
//       user : 'root',
//       password : 'chandan19',
//       database : 'fb_blog'
//     }
// });
