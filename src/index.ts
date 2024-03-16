import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
    const app = express();

    /** define o tipo de dado -> json */
    app.use(express.json())

    // app.get('/', (req, res) => {
    //     return res.json("tudeo certo")
    // });

    app.use(routes);

    return app.listen(process.env.PORT)

})