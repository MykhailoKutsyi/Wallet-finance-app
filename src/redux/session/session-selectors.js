const getIsAuth = state => state.session.isAuth;

const getUserName = state => state.session.user.name;

const getUser = state => state.session.user;

const getUserBalance = state => state.session.user.name;

const getLoading = state => state.session.loading;

const sessionSelectors = {
  getIsAuth,
  getUserName,
  getUser,
  getUserBalance,
  getLoading,
};

export default sessionSelectors;
