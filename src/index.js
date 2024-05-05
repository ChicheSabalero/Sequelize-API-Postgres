import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Conecction Done");
    app.listen(3000);
    console.log("Server Running on Port", 3000);
  } catch (error) {
    console.log(error);
  }
}

main();
