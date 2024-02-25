import { User } from "../../domain/services/user.service";
import { CompoundedUser } from "../compounds/user.compound.service";
import { Profile } from "../leafs/profile.leaf";

export class UserSession {
  users: CompoundedUser;

  /**
   * The `load` function initializes a new `CompoundedUser` object and adds a `Profile` object to it.
   */
  load() {
    this.users = new CompoundedUser();
    this.users.add(new Profile());
  }

  /**
   * The function `mountComponentGroup` takes an array of User components, creates a new CompoundedUser
   * group, adds each component to the group, and then adds the group to the users collection.
   * @param {User[]} components - An array of User objects that represent individual users.
   */
  mountComponentGroup(components: User[]) {
    const group = new CompoundedUser();
    for (const component of components) {
      group.add(component);
    }
    this.users.add(group);
  }
}
