import { Token } from "../entities/token";

export interface User {
  signIn(username: string, password: string): Promise<Token>;
  signUp(username: string, password: string, email: string): Promise<boolean>;
}
