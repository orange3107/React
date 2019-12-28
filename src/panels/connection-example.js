

var mysql = require('mysql');
 console.log('Get connection ...');
 var conn = mysql.createConnection({
  database: 'ss',
  host: "localhost",
  user: "Ilkar",
  password: "Ilkar"
});
 
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const sql = `SELECT * FROM hh`;
 
conn.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
    const a = results; 
});

     let name = [a.length];
      for(let i=0; i < a.length; i++){
     name[i] = a[i].name;
     console.log(name[i]);
    
   
  

 
conn.end();
}

