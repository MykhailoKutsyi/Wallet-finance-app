const getIsAuth = state => state.session.isAuth;

const getUserName = state => state.session.user.name;

const getUser = state => state.session.user;

const sessionSelectors = { getIsAuth, getUserName, getUser };

export default sessionSelectors;
