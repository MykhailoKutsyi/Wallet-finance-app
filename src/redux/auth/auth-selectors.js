const getLoggedIn = state => state.session.isAuth;

const getUserName = state => state.user.name;

const getUser = state => state.user;

export { getLoggedIn, getUserName, getUser };
