"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const schema_1 = require("../../interfaces/schema");
const validate = async (req, res, next) => {
    try {
        await schema_1.UserInputDTO.safeParse(req.body);
        next();
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            err = err.issues.map(e => ({ path: e.path[0], message: e.message }));
        }
        return res.status(409).json({
            status: 'failed',
            error: err,
        });
    }
};
exports.validate = validate;
//# sourceMappingURL=validator.js.map