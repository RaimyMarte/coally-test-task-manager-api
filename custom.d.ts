import { IToken, IUser } from "./src/models/user";

export { }

declare global {
  namespace Express {
    export interface Request {
      user: IUser | null;
      token: string | null;
    }
  }
}