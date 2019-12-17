export const signupConfirmConstraints = {
  otp: {
    presence: { empty: false },
    length: { is: 6 },
  },
};
