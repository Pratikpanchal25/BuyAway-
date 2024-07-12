import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("buyaway", "root", "",{
    dialect: "mysql",
    logging: false
})

sequelize.authenticate()
.then(()=> console.log("Database Connected!!!"))
.catch((err)=> console.log("Databsee Connection FAILED!!!", err))