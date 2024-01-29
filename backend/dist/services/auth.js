"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const eventDispatcher_1 = require("../decorators/eventDispatcher");
const events_1 = __importDefault(require("../subscribers/events"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
let AuthService = class AuthService {
    constructor(userModel, logger, eventDispatcher) {
        this.userModel = userModel;
        this.logger = logger;
        this.eventDispatcher = eventDispatcher;
    }
    async SignUp(userInputDTO) {
        try {
            const { email } = userInputDTO;
            const existingUser = await this.userModel.findOne({ email });
            if (existingUser) {
                throw new Error('This user already exists');
            }
            this.logger.silly('Hashing password');
            const hashedPassword = await bcryptjs_1.default.hash(userInputDTO.password, 10);
            this.logger.silly('Creating user db record');
            const userRecord = await this.userModel.create(Object.assign(Object.assign({}, userInputDTO), { password: hashedPassword }));
            this.logger.silly('Generating JWT');
            const token = this.generateToken(userRecord);
            if (!userRecord) {
                throw new Error('User cannot be created');
            }
            const { username } = userRecord;
            this.eventDispatcher.dispatch(events_1.default.user.signUp, { user: userRecord });
            return { username, token };
        }
        catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
    async SignIn(email, password, remember) {
        const userRecord = await this.userModel.findOne({ email });
        if (!userRecord) {
            throw new Error('User not registered');
        }
        this.logger.silly('Checking password');
        const validPassword = await bcryptjs_1.default.compare(password, userRecord.password);
        if (!validPassword) {
            throw new Error('Invalid password');
        }
        else {
            this.logger.silly('Password is valid');
            this.logger.silly('Generating JWT');
            const token = this.generateToken(userRecord, remember);
            this.eventDispatcher.dispatch(events_1.default.user.signIn, { user: userRecord });
            const { username } = userRecord;
            return { username, token };
        }
    }
    generateToken(user, remember = false) {
        /**
         * A JWT means JSON Web Token, so basically it's a json that is _hashed_ into a string
         * The cool thing is that you can add custom properties a.k.a metadata
         * Here we are adding the userId, role and name
         * Beware that the metadata is public and can be decoded without _the secret_
         * but the client cannot craft a JWT to fake a userId
         * because it doesn't have _the secret_ to sign it
         * more information here: https://softwareontheroad.com/you-dont-need-passport
         */
        this.logger.silly(`Sign JWT for userId: ${user._id}`);
        return jsonwebtoken_1.default.sign({
            _id: user._id, // We are gonna use this in the middleware 'isAuth'
            // role: user.role,
            name: user.username,
        }, config_1.default.jwtSecret, { expiresIn: remember ? 365 * 24 + 'h' : '24h' });
    }
};
AuthService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('userModel')),
    __param(1, (0, typedi_1.Inject)('logger')),
    __param(2, (0, eventDispatcher_1.EventDispatcher)()),
    __metadata("design:paramtypes", [Object, Object, eventDispatcher_1.EventDispatcherInterface])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth.js.map