"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./config/swagger/swagger_output.json"));
const data_source_1 = require("./config/db/data-source");
const error_1 = require("./middlewares/error");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    /** define o tipo de dado -> json */
    app.use(express_1.default.json());
    // app.get('/', (req, res) => {
    //     return res.json("tudeo certo")
    // });
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default));
    app.use(routes_1.default);
    app.use(error_1.errorMiddleware);
    return app.listen(process.env.PORT);
});
