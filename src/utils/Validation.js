import Input from "@/components/Input";
import val from "validate.js";

const Validate = (name, money, reason) => {
  var constraints = {
    name: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      length: {
        maximum: 20,
        message: "Name must of maximum of 20 characters",
      },
    },
    money: {
      presence: {
        allowEmpty: false,
        message: "cannnot be empty",
      },
      length: {
        maximum: 7,
        message: "Input cannot exceed maximum of 99 lakhs",
      },
      format: {
        pattern: "[0-9]+",
        message: "Only numbers accepted in money section",
      },
    },
    reason: {
      length: {
        maximum: 60,
        message: "Input cannot exceed 60 characters",
      },
    },
  };

  return val({ name: name, money: money, reason: reason }, constraints);
};

export default Validate;
