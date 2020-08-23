// delete Query
module.exports =((user,knex,knex1)=>{
    user
        .delete('/',(req,res)=>{
            knex('sign_up').where({username:req.body.username,password:req.body.password}).del()
            .then(result=>{
                // knex1.schema.drop
                knex1.schema.dropTableIfExists(req.body.username)
                .then(result=>{
                    res.send('secuessfully deleted');
                })
            })
        })
})
