type InputObjectType = {
  value: string;
  isValid: boolean;
};

type InputsObjectType = {
  ISBN: InputObjectType;
  title: InputObjectType;
  cost: InputObjectType;
  allValid: boolean;
};

export default InputsObjectType;
