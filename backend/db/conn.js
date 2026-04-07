const mongoose = require("mongoose");

const dns = require("dns");

require("dotenv").config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose.set("strictQuery", true);

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.1k6efct.mongodb.net/?appName=Cluster0`,
  );

  console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;
