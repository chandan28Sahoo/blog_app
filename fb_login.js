module.exports = ((login,knex)=>{
    login
        .post('/',(req,res)=>{
            knex.select('*').from('sign_up')
            .then(rows=>{
                var condition=false;
                for (i of rows){
                    if (i.email == req.body.email){
                        if(i.password == req.body.password){
                            condition=true;
                        }
                    }
                }
                if (condition){
                    res.send('login sucessfully')
                }
                else{
                    res.send("Invalid email & password ! try again !"); 
                }
            })
        })
})











knex('sign_up').where("email",req.body.email).then((result)=>{
    if (result[0] != undefined || result.length !=0  ){
        // console.log(result)
        if (result[0]["password"]==req.body.password){
            res.send('login sucessfully')
        }else{
            res.send("curect your password")
        }
    }else{
        res.send("404")
    }
});
