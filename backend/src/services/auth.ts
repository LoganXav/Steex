import { Inject, Service } from 'typedi';
import { IUser, IUserInputDTO } from '~/interfaces/schema';
import bcrypt from 'bcryptjs';
import { EventDispatcher, EventDispatcherInterface } from '~/decorators/eventDispatcher';
import events from '~/subscribers/events';
import jwt from 'jsonwebtoken';
import config from '~/config';

@Service()
export default class AuthService {
  constructor(
    @Inject('userModel') private userModel: Models.UserModel,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
  ) {}

  public async SignUp(userInputDTO: IUserInputDTO): Promise<{ token: string }> {
    try {
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

      this.eventDispatcher.dispatch(events.user.signUp, { user: userRecord });

      return { token };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  private generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

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
        role: user.role,
        name: user.username,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
}
