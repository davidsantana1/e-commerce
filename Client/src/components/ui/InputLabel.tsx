import { uncamelize } from "@/utils/helpers";

interface InputLabel {
  inputName: string;
}

function InputLabel({ inputName }: InputLabel) {
  return (
    <label htmlFor={inputName} className="mb-2 font-bold capitalize">
      {uncamelize(inputName)}
    </label>
  );
}

export default InputLabel;
