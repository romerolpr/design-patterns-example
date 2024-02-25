import { Token } from "../../domain/entities/token";
import { User } from "../../domain/services/user.service";

export class CompoundedUser implements User {
  children: User[];

  /**
   * The add function appends a user object to an array of children.
   * @param {User} user - The `add` function is designed to add a `User` object to the `children`
   * array. The `user` parameter represents the `User` object that will be added to the array.
   */
  add(user: User) {
    this.children.push(user);
  }
  /**
   * The `remove` function in TypeScript removes a user from an array of children by deleting the user
   * at a specific index.
   * @param {User} user - The `user` parameter represents the user object that you want to remove from
   * the list of children in the current context.
   */
  remove(user: User) {
    const existantUserIndex = this.children.indexOf(user);
    delete this.children[existantUserIndex];
  }

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
