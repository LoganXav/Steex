"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const mongoose_1 = __importDefault(require("./mongoose"));
const logger_1 = __importDefault(require("./logger"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const user_1 = __importDefault(require("../models/user")); // Adjust the path based on your project structure
exports.default = async ({ expressApp }) => {
    const mongoConnection = await (0, mongoose_1.default)();
    logger_1.default.info('✌️ DB loaded and connected!');
    const userModel = {
        name: 'userModel',
        model: user_1.default,
    };
    const { agenda } = await (0, dependencyInjector_1.default)({
        mongoConnection,
        models: [userModel],
    });
    logger_1.default.info(agenda);
    await (0, express_1.default)({ app: expressApp });
    logger_1.default.info('✌️ Express loaded');
};
//# sourceMappingURL=index.js.map