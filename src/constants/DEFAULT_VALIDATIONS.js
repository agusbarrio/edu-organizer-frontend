import CORE_TEXTS from "constants/CORE_TEXTS";

const DEFAULT_VALIDATIONS = {
  EMAIL: {
    email: { value: true, message: CORE_TEXTS.VALIDATIONS_EMAIL },
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
  },
  PASSWORD: {
    min: { value: 4, message: CORE_TEXTS.VALIDATIONS_MIN },
    max: { value: 16, message: CORE_TEXTS.VALIDATIONS_MAX },
    minUppercase: {
      value: 0,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINUPPERCASE,
    },
    minLowercase: {
      value: 0,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINLOWERCASE,
    },
    minNumbers: {
      value: 0,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINNUMBERS,
    },
    minSymbols: {
      value: 0,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINSYMBOLS,
    },
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
  },
  EQUAL_TO: {
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
    oneOf: {
      message: CORE_TEXTS.VALIDATIONS_EQUAL_TO,
    },
  },
  TEXT: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 255, message: CORE_TEXTS.VALIDATIONS_MAX },
  },
  DESCRIPTION: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 1000, message: CORE_TEXTS.VALIDATIONS_MAX },
  },
  DATE: {
    date: { value: true, message: CORE_TEXTS.VALIDATIONS_DATE },
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    min: { message: CORE_TEXTS.VALIDATIONS_MIN_DATE },
    max: { message: CORE_TEXTS.VALIDATIONS_MAX_DATE },
  },
  URL: {
    url: { value: true, message: CORE_TEXTS.VALIDATIONS_URL },
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 2083 },
  },
  NUMBER: {
    number: { value: true, message: CORE_TEXTS.VALIDATIONS_NUMBER },
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    integer: { value: true, message: CORE_TEXTS.VALIDATIONS_INTEGER },
    min: { message: CORE_TEXTS.VALIDATIONS_MIN_NUMBER },
    max: { message: CORE_TEXTS.VALIDATIONS_MAX_NUMBER },
    moreThan: { message: CORE_TEXTS.VALIDATIONS_MORE_THAN_NUMBER },
    lessThan: { message: CORE_TEXTS.VALIDATIONS_LESS_THAN_NUMBER },
  },
  ID: {
    integer: { value: true, message: CORE_TEXTS.VALIDATIONS_INTEGER },
    required: { value: true, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    moreThan: { value: 0, message: CORE_TEXTS.VALIDATIONS_MIN_NUMBER },
  },
  ONE_OF: {
    oneOf: { value: [], message: CORE_TEXTS.VALIDATIONS_ONE_OF },
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
  },
  CHECKBOX: {
    required: { value: true, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
  },
  NAME: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 255, message: CORE_TEXTS.VALIDATIONS_MAX },
    matches: {
      value: /^[a-zA-Z\s]*$/,
      message: CORE_TEXTS.VALIDATIONS_NAME,
    },
  },
  OBJECT: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
  },
};

export default DEFAULT_VALIDATIONS;
