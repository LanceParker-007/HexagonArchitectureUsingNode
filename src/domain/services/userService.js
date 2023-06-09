// Core Main Buisness Logic
class UserService {
  constructor(httpUserRepository) {
    this.userRepository = httpUserRepository;
  }

  createUser(user) {
    return this.userRepository.createUser(user);
  }

  getAllUsers(){
    return this.userRepository.getAllUsers();
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
  }

  updateUser(user) {
    
    return this.userRepository.updateUser(user);
  }

  deleteUser(id) {
    return this.userRepository.deleteUser(id);
  }
}

export default UserService;
