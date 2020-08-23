module.exports = ((sign_up,knex,knex1,bcrypt,saltRounds)=>{
    sign_up
        .post('/',(req,res)=>{
            var decition = false;
            var username=req.body.username;
            var password=req.body.password;
            var confirmPassword=req.body.confirmPassword;

            knex.select('*').from('sign_up')
            .then(row=>{
                if (row.length==0){
                    if (password!=confirmPassword){
                        res.send("confirm password is worng ! please put the correct password");
                    }else{
                        bcrypt.hash(password, saltRounds,(err, hash)=>{
                            console.log(hash); 
                            // Store hash in your password DB.
                            if(err){
                                return res.json({
                                    message:"Somthing error ! try again !",
                                    error:err
                                })
                            }else{
                                
                                knex('sign_up').insert([req.body])
                                .then(row=>{
                                    knex1.schema.createTable(username,(t)=>{
                                    t.increments('id').primary();
                                    t.string('username',100);
                                    t.string('DOB',100);
                                    t.string('password',100);
                                    t.string('facebk_id',200)
                                }).then(row =>{
                                    let data1={
                                        'username':req.body.username,
                                        'DOB':req.body.DOB,
                                        'password':hash,
                                        'facebk_id':req.body.facebook_id
                                    }
                                    knex1(req.body.username).insert(data1)
                                    .then(row=>{
                                        res.send('sucessfully done');
                                    })
                                })
                            })
                            }
                        });
                    }
                }else{       
                    if (password!=confirmPassword){
                        res.send("confirm password is worng ! please put the correct password");
                    }else{
                        knex.select('*').from('sign_up')
                        .then(row=>{
                            for (i in row){     
                                if(row[i].email===req.body.email && row[i].password===req.body.password){
                                    decition = true
                                }else{
                                    decition = false;
                                }
                            }if (decition){ 
                                res.send("data is alredy existed")
                            }else{
                                bcrypt.hash(password, saltRounds,(err, hash)=>{
                                    console.log(hash); 
                                    // Store hash in your password DB.
                                    if(err){
                                        return res.json({
                                            message:"Somthing error ! try again !",
                                            error:err
                                        })
                                    }else{
                                        knex('sign_up').insert(req.body)
                                        .then(row=>{
                                            knex1.schema.createTable(req.body.username,(t)=>{
                                                t.increments('id').primary();
                                                t.string('username',100);
                                                t.string('DOB',Date);
                                                t.string('password',100);
                                                t.string('facebk_id',200)
                                            }).then(row =>{
                                                let data1={
                                                    'username':req.body.username,
                                                    'DOB':req.body.DOB,
                                                    'password':hash,
                                                    'facebk_id':req.body.facebook_id
                                                }
                                                knex1(req.body.username).insert(data1)
                                                .then(row=>{
                                                    res.send('sucessfully done');
                                                })
                                            })
                                        })
                                    }

                                })
                            }
                        })
                    }
        
                }
            
            })
            
        })
})
// with out hash
module.exports = ((sign_up,knex,knex1)=>{
    sign_up
        .post('/',(req,res)=>{
            var decition = false;
            var username=req.body.username;

            knex.select('*').from('sign_up')
            .then(row=>{
                if (row.length==0){
                    knex('sign_up').insert([req.body])
                    .then(row=>{
                        knex1.schema.createTable(username,(t)=>{
                        t.increments('id').primary();
                        t.string('username',100);
                        t.string('DOB',100);
                        t.string('password',100);
                        t.string('facebk_id',200)
                    }).then(row =>{
                        let data1={
                            'username':req.body.username,
                            'DOB':req.body.DOB,
                            'password':req.body.password,
                            'facebk_id':req.body.facebook_id
                        }
                        knex1(req.body.username).insert(data1)
                        .then(row=>{
                            res.send('sucessfully done');
                        })
                    })
                })
                }else{       
                    knex.select('*').from('sign_up')
                    .then(row=>{
                        for (i in row){     
                            if(row[i].email===req.body.email && row[i].password===req.body.password){
                                decition = true
                            }else{
                                decition = false;
                            }
                        }if (decition){ 
                            res.send("data is alredy existed")
                        }else{
                            knex('sign_up').insert(req.body)
                            .then(row=>{
                                knex1.schema.createTable(req.body.username,(t)=>{
                                    t.increments('id').primary();
                                    t.string('username',100);
                                    t.string('DOB',Date);
                                    t.string('password',100);
                                    t.string('facebk_id',200)
                                }).then(row =>{
                                    let data1={
                                        'username':req.body.username,
                                        'DOB':req.body.DOB,
                                        'password':req.body.password,
                                        'facebk_id':req.body.facebook_id
                                    }
                                    knex1(req.body.username).insert(data1)
                                    .then(row=>{
                                        res.send('sucessfully done');
                                    })
                                })
                            })
                        }
                    })
        
                }
            
            })
        })
})



