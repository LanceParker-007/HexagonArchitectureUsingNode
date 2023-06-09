// It acts like a adapter and from here we can 
// manage how to store/act with our user/users data

//Implementing userRepository interface to help our application interact with external db,
//If in the future we need to change our db we just have to make changes here and no change in our main logic
class HttpUserRepository {
  constructor() {
    // Array to store user data
    this.users = [];
  }

  createUser(user) {
    // Generate a unique ID for the user
    const id = Date.now().toString();

    // Create the user object
    const newUser = { id, ...user };

    // Store the user object in the array
    this.users.push(newUser);

    return newUser;
  }

  getAllUsers(){
    return this.users;
  }

  getUserById(id) {
    // Find the user by ID in the array
    const user = this.users.find((u) => u.id === id);

    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  }

  updateUser(user) {
    // Find the user by ID in the array
    const existingUserIndex = this.users.findIndex((u) => u.id === user.id);

    if (existingUserIndex !== -1) {
      // Update the user object
      this.users[existingUserIndex] = user;

      return user;
    } else {
      throw new Error("User not found");
    }
  }

  deleteUser(id) {
    // Find the user by ID in the array
    const existingUserIndex = this.users.findIndex((u) => u.id === id);

    if (existingUserIndex !== -1) {
      // Remove the user from the array
      const deletedUser = this.users.splice(existingUserIndex, 1)[0];

      return deletedUser;
    } else {
      throw new Error("User not found");
    }
  }
}

export default HttpUserRepository;
