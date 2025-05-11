import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import Paragraph from "./Paragraph";
import InputLabel from "./InputLabel";

interface InputProps<T extends FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  placeholder?: string;
  type: string;
}

function Input<T extends FieldValues>({
  name,
  register,
  errors,
  placeholder,
  type,
  ...props
}: InputProps<T>) {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div className="mb-3 flex flex-col">
      <InputLabel inputName={name} />
      <input
        id={name}
        className="outline-brand-500 text-brand-500 mb-2 w-100 rounded-xl bg-white p-4 outline-2 placeholder:font-medium focus:outline-3"
        {...register(name)}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && (
        <Paragraph className="text-sm text-red-500">{errorMessage}</Paragraph>
      )}
    </div>
  );
}

export default Input;
