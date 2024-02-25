import { Token } from "../../domain/entities/token";
import { User } from "../../domain/services/user.service";

export class Profile implements User {
  private token: Token;

  /**
   * The `signIn` function in TypeScript is a placeholder that throws an error indicating it has not
   * been implemented yet.
   * @param {string} username - The `username` parameter is a string that represents the username of
   * the user trying to sign in.
   * @param {string} password - The `password` parameter is a string that represents the user's
   * password for authentication during the sign-in process.
   */
  signIn(username: string, password: string): Promise<Token> {
    throw new Error("Method not implemented.");
  }
  /**
   * The signUp function in TypeScript takes in a username, password, and email as parameters and
   * returns a Promise<boolean>.
   * @param {string} username - The `username` parameter is a string that represents the username
   * chosen by the user during the sign-up process.
   * @param {string} password - The `password` parameter in the `signUp` function is a string type. It
   * is used to store the password that the user provides during the sign-up process.
   * @param {string} email - The `email` parameter in the `signUp` function is a string that represents
   * the email address of the user signing up for an account.
   */
  signUp(username: string, password: string, email: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
