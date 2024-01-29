import { Document, Model } from 'mongoose';
import { IUser } from '../interfaces/schema';

declare global {
  namespace Models {
    export type UserModel = Model<IUser & Document>;
  }
}
