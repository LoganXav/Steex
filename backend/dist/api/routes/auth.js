"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const typedi_1 = __importDefault(require("typedi"));
const auth_1 = __importDefault(require("../../services/auth"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/auth', route);
};
route.post('/signup', validator_1.validate, async (req, res, next) => {
    const logger = typedi_1.default.get('logger');
    logger.debug('Calling Sign-up endpoint with body: %o', req.body);
    try {
        const authServiceInstance = typedi_1.default.get(auth_1.default);
        const { username, token } = await authServiceInstance.SignUp(req.body);
        return res
            .status(201)
            .cookie('token', token, {
            httpOnly: true,
            maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
            secure: true,
            // sameSite: 'None',
        })
            .json({ username, token });
    }
    catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
    }
});
route.post('/signin', validator_1.validate, async (req, res, next) => {
    const logger = typedi_1.default.get('logger');
    logger.debug('Calling Sign-in endpoint with body: %o', req.body);
    try {
        const { email, password, remember } = req.body;
        const authServiceInstance = typedi_1.default.get(auth_1.default);
        const { username, token } = await authServiceInstance.SignIn(email, password, remember);
        return res
            .status(200)
            .cookie('token', token, {
            httpOnly: true,
            maxAge: req.body.remember ? 365 * 24 * 60 * 60 * 1000 : null,
            secure: true,
            // sameSite: 'None',
        })
            .json({ username });
    }
    catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
    }
});
//# sourceMappingURL=auth.js.map