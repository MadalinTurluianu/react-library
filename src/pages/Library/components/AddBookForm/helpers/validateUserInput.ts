const validateUserInput = (inputName: string, inputValue: string) => {
  let isValid = true;

  switch (inputName.toUpperCase()) {
    case "TITLE":
      if (inputValue.trim() === "") {
        isValid = false;
      }
      break;

    case "ISBN":
      if (
        !(
          inputValue.trim().match(/\d+?-\d+?-\d+?-\d+?-\d+?/g) &&
          inputValue.trim().length === 17
        )
      ) {
        isValid = false;
      }
      break;

    case "COST":
      if (!(Number(inputValue) > 0)) {
        isValid = false;
      }
      break;
  }

  return isValid;
};

export default validateUserInput;
