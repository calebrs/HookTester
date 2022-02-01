// Todo: Connect to postgres, figure out how to pass around the "client" variable to rouets that need to use it
const config = require("config");
const pgPassword = config.get("pgPassword");
const pgUser = config.get("pgUser");
const { Client } = require("pg");

const client = new Client({
  host: "",
  user: pgUser,
  port: pgPassword,
  password: "",
  database: "",
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log("postgres connected...");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = { connectDB, client };
