// app.post('/forget_password',(req,res)=>{
//     knex.select('*').from('sign_up')
//     .then(row=>{
//         for (i in row){ 
//             if(row[i].email!==req.body.email){
//                 res.send("invalid email ! try again !");
//             }else if (row[i].email===req.body.email){
//                 res.send("check your mail !")
//             }
//         }
//     })
// })
