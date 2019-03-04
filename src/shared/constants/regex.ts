export const Regexs = {
  password: /^(?=.*[A-Z])(?=.*[@_+-])(?=.*[0-9])(?=.*[a-z]).{8,100}$/,
  user_pwd: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,100}$/,
  whitespace: /\S/,
};
