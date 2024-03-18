import express from "express";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./config/swagger/swagger_output.json";
import { AppDataSource } from "./config/db/data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    /** define o tipo de dado -> json */
    app.use(express.json())

    // app.get('/', (req, res) => {
    //     return res.json("tudeo certo")
    // });

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

    app.use(routes);

    return app.listen(process.env.PORT)

})