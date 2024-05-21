const AUTH_KEY = "userInfo";
export const clientLogin = (userInfo) => {
  localStorage.setItem(AUTH_KEY, JSON.stringify(userInfo));
};

export const clientLogout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getUserInfo = () => {
  const item = localStorage.getItem(AUTH_KEY);
  return item ? JSON.parse(item) : null;
};
