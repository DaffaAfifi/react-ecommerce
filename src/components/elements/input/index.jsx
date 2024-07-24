import Label from "./label";
import Input from "./input";

const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
