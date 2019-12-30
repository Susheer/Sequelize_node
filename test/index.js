const express = require("express");
const app = express();
const db = require("./Databases");
const dbPool = require("./Databases/sqlserver");

app.get("/getData", async (req, res) => {
  try {
    let result = {};

    const pool = await dbPool;

    if (pool) {
      result = await pool.request().query("select * from mytable");
      res.json(result.recordset);
    } else {
      console.log("pooln not found ");
      return res.status(200).send({ success: false });
    }
  } catch (err) {
    console.log("err");
    res.status(500);
    res.send(err.message);
  }
});
app.get("/addData", async (req, res) => {
  try {
    const pool = await dbPool;
    var sql = await "INSERT INTO mytable (name ,Age) VALUES ('Arbaj', 24)";

    const result = await pool.request().query(sql, function(err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    // console.log("Connected!");
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

app.get("/get", (req, res) => {
  console.log("Rquest processed");
  db.execute("SELECT * FROM Products")
    .then(records => {
      console.log("Records from Products table");
      console.log(records[0]);
      res.json(records[0]);
    })
    .catch(error => {
      console.log("Error in reading records from Products table", error);
      res.json(error);
    });
});

app.listen(3000, () => {
  console.log("Server bhag raha hai...");
});
