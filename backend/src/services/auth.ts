import { Inject, Service } from 'typedi';
import { IUser, IUserInputDTO } from '~/interfaces/schema';
import bcrypt from 'bcryptjs';
import { EventDispatcher, EventDispatcherInterface } from '~/decorators/eventDispatcher';
import events from '~/subscribers/events';
import jwt from 'jsonwebtoken';
import config from '../config';

@Service()
export default class AuthService {
  constructor(
    @Inject('userModel') private userModel: Models.UserModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async SignUp(userInputDTO: IUserInputDTO): Promise<{ username: string; token: string }> {
    try {
      const { email } = userInputDTO;
      const existingUser = await this.userModel.findOne({ email });

      if (existingUser) {
        throw new Error('This user already exists');
      }
      this.logger.silly('Hashing password');

      const hashedPassword = await bcrypt.hash(userInputDTO.password, 10);

      this.logger.silly('Creating user db record');

      const userRecord = await this.userModel.create({
        ...userInputDTO,
        password: hashedPassword,
      });

      this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);

      if (!userRecord) {
        throw new Error('User cannot be created');
      }

      const { username } = userRecord;

      this.eventDispatcher.dispatch(events.user.signUp, { user: userRecord });

      return { username, token };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async SignIn(
    email: string,
    password: string,
    remember: boolean,
  ): Promise<{ username: string; token: string }> {
    const userRecord = await this.userModel.findOne({ email });

    if (!userRecord) {
      throw new Error('User not registered');
    }

    this.logger.silly('Checking password');

    const validPassword = await bcrypt.compare(password, userRecord.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    } else {
      this.logger.silly('Password is valid');
      this.logger.silly('Generating JWT');

      const token = this.generateToken(userRecord, remember);

      this.eventDispatcher.dispatch(events.user.signIn, { user: userRecord });

      const { username } = userRecord;
      return { username, token };
    }
  }

  private generateToken(user: IUser, remember = false): string {
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
    return jwt.sign(
      {
        _id: user._id, // We are gonna use this in the middleware 'isAuth'
        // role: user.role,
        name: user.username,
      },
      config.jwtSecret,
      { expiresIn: remember ? 365 * 24 + 'h' : '24h' },
    );
  }
}
