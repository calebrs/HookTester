// Todo: Connect to postgres, figure out how to pass around the "client" variable to rouets that need to use it
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

client.connect();
