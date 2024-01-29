"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./loaders/logger"));
const loaders_1 = __importDefault(require("./loaders"));
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app.listen(config_1.default.port, () => {
        logger_1.default.info(`
    ################################################
    🛡️  Server listening on port: ${config_1.default.port} 🛡️
    ################################################
    `).on('error', err => {
            logger_1.default.error(err);
            process.exit(1);
        });
    });
}
exports.default = startServer;
//# sourceMappingURL=app.js.map