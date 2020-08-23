//update query;
module.exports = ((user,knex,knex1)=>{
    user
        .put('/update/',(req,res)=>{
            knex('sign_up').where('sign_up.username',req.body.username)
            .update({password:req.body.password})
            .then((err,rows)=>{
                knex1(req.body.username).where({username:req.body.username})
                .update({password:req.body.password})
                .then(result=>{
                    // console.log(result);
                    res.send("sucessfully update your password");
                })
                
            })
        
        })
}) 
