const getIsAuth = state => state.session.isAuth;

const getUserName = state => state.session.user.name;

const getUser = state => state.session.user;

const getUserBalance = state => state.session.user.name;

const sessionSelectors = { getIsAuth, getUserName, getUser, getUserBalance };

export default sessionSelectors;
