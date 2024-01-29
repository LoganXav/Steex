"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../config"));
const api_1 = __importDefault(require("../api"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
exports.default = ({ app }) => {
    /**
     * Health Check endpoints
     */
    app.post('/status', (req, res) => {
        res.status(200).json({ name: 'Healthy!' });
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(config_1.default.api.prefix, (0, api_1.default)());
    /// catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });
    /// error handlers
    app.use((err, req, res, next) => {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res.status(err.status).send({ response: err.message }).end();
        }
        return next(err);
    });
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            error: {
                defaultUserMessage: err.message || 'Something went wrong',
                message: err.message || 'Something went wrong',
                status: err.status || 500,
                data: err.data || null,
            },
        });
    });
};
//# sourceMappingURL=express.js.map