export const getBaseAuthURL = (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_AUTH_URL;
  return `${baseUrl}/${endpoint}`;
};

export const getBaseResetURL = (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_RESET_URL;
  return `${baseUrl}/${endpoint}`;
};
