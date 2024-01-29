"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInputDTO = exports.User = void 0;
const zod_1 = require("zod");
exports.User = zod_1.z.object({
    _id: zod_1.z.number(),
    username: zod_1.z.string().min(1).max(255),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
});
exports.UserInputDTO = zod_1.z.object({
    username: zod_1.z.string().min(1).max(255),
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    remember: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=schema.js.map