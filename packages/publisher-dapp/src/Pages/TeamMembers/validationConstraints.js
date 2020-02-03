export const inviteEmailsConstraints = {
  email: {
    presence: { allowEmpty: false },
    email: { message: "'%{value}' is not a valid email" },
  },
};
