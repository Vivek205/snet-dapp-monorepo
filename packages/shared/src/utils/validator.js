import validate from "validate.js";

const validator = validate;

const hasLowerCase = (value, options) => {
  if (/[a-z]/.test(value)) {
    return;
  }
  return options.message || "must contain a lowercase character";
};

const hasUpperCase = (value, options) => {
  if (/[A-Z]/.test(value)) {
    return;
  }
  return options.message || "must contain an uppercase character";
};

const hasNumber = (value, options) => {
  if (/[0-9]/.test(value)) {
    return;
  }
  return options.message || "must contain a number";
};

const hasAWSPasswordSplChar = (value, options) => {
  // eslint-disable-next-line no-useless-escape
  if (/[\^\$\*\.\[\]\{\}\(\)\?\-\"\!\@\#\%\&\/\,\>\<\'\:\;\|\_\~\`]/.test(value)) {
    return;
  }
  return options.message || "must contain a special character";
};

const array = (arrayItems, itemConstraints, key) => {
  if (!validate.isArray(arrayItems)) {
    return `${key} is not a valid array`;
  }
  const arrayItemErrors = arrayItems.reduce((errors, item) => {
    const error = validate(item, itemConstraints);
    if (error) errors.push(...error);
    return errors;
  }, []);
  return validate.isEmpty(arrayItemErrors) ? null : `^${arrayItemErrors}`;
};

validator.validators = {
  ...validate.validators,
  // custom validators
  hasLowerCase,
  hasUpperCase,
  hasNumber,
  hasAWSPasswordSplChar,
  array,
};

// default options
validator.options = { format: "flat" };

export default validator;
