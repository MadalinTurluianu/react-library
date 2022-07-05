import InputsObjectType from "./InputsObjectType";

type ActionTypeType = Exclude<keyof InputsObjectType, "allValid">;

export default ActionTypeType;
