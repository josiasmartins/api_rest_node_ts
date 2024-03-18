import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./config/swagger_output.json";

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