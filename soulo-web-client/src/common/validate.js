const validate = (value, rules) => {
    let isValid = true;
    
    for (let rule in rules) {
      switch (rule) {
        case 'minLength': 
            isValid = isValid && minLengthValidator(value, rules[rule]); break;
        case 'isRequired': 
            isValid = isValid && requiredValidator(value); break;
        case 'isEmail': 
            isValid = isValid && emailValidator(value); break;
        case 'isPassword':
            isValid = isValid && passwordValidator(value); break;
        default: 
            isValid = true;
      }
    }
    return isValid;
  }
  
  const minLengthValidator = (value, minLength) => value.length >= minLength;
  const requiredValidator = value => value.trim() !== '';
  const emailValidator = value => {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return re.test(String(value).toLowerCase());
  }
  const passwordValidator = value => value.length >= 8 && value.length <= 32;

  export default validate;