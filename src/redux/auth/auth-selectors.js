const getLoggedIn = state => state.session.isAuth;

const getUserName = state => state.auth.user.name;

const getUser = state => state.user;

const authSelectors = { getLoggedIn, getUserName, getUser };

export default authSelectors;
