export const isUserLoggedIn = () => {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
};
