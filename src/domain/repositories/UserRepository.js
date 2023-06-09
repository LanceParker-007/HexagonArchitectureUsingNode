// userRepo *interface*
// Acting as a Port: How to interact with user data storage

class UserRepository {
    createUser(user) {
      throw new Error('createUser method not implemented');
    }

    getAllUsers(){
        throw new Error('getAllUsers method not implemented')
    }
  
    getUserById(id) {
      throw new Error('getUserById method not implemented');
    }
  
    updateUser(user) {
      throw new Error('updateUser method not implemented');
    }
  
    deleteUser(id) {
      throw new Error('deleteUser method not implemented');
    }
  }
  
  export default UserRepository;
  