const UserService = {
  save(user, userID, username) {
    // console.log('>>> UserService saving to localStorage user:', arguments);
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('userID', userID);
    window.localStorage.setItem('username', username);
  },
  read() {
    return window.localStorage.getItem('userID');
  },
  destroy() {
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('userID');
    window.localStorage.removeItem('username');
  },
};

export default UserService;
