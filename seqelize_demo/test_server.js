const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("./admin");
const sequelize = require("./db");
app.use(bodyParser.json());
app.use(admin);

app.get("/", async (req, res) => {
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

sequelize
  .sync()
  .then(res => {
    //  console.log("res", res);
  })
  .catch(err => {
    console.log("err sequelize ", err);
  });

app.listen(3000, () => {
  console.log("Server bhag raha hai...");
});
