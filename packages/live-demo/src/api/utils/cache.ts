export const getAuthorization = () => {
  const authorization = localStorage.getItem('authorization');
  return authorization ? `Bearer ${authorization}` : '';
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken || '';
};
