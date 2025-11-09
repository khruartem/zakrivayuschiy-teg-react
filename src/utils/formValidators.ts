const TXT_REGEX = /^[a-zA-Zа-яА-Я0-9!" "@#$%^&*()_+{}[\]:;<>,.?~\\/-]{6,}$/;
const TRUE_REGEX = /[\s\S]*/;

export const formValidators = {
  title: {
    validator: (value: string) => TXT_REGEX.test(value),
    message: "Incorrect value.",
  },
  tag: {
    validator: (value: string) => TRUE_REGEX.test(value),
    message: "",
  },
  image: {
    validator: (value: string) => TRUE_REGEX.test(value),
    message: "",
  },
  text: {
    validator: (value: string) => TXT_REGEX.test(value),
    message: "Incorrect value.",
  },
};
