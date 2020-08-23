var knex1 = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'chandan19',
      database : 'fb_blog'
    }
});

module.exports=knex1;