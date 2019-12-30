const sqlAdaptor = require("mssql");
const dbConfig = require("../configuration/getDbConfiguration");

console.log("[Conig]", dbConfig);

//.catch(err => console.log("Database Connection Failed! Bad Config: ", err));
// create Request object

async function iniliseDb() {
  let poolTest = await new sqlAdaptor.ConnectionPool(dbConfig.SQL)
    .connect()
    .then(pool => {
      return pool;
    })
    .catch(e => {
      return null;
    });
  return await poolTest;
}

module.exports = iniliseDb();
