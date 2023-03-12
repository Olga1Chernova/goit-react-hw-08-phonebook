export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;
export const getAuth = ({ auth }) => {
    const { isLogin, token, error } = auth;
    return { isLogin, token, error };
}