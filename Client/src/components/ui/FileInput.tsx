import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import InputLabel from "./InputLabel";
import Paragraph from "./Paragraph";

interface FileInputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
}

function FileInput<T extends FieldValues>({
  name,
  errors,
  register,
  ...props
}: FileInputProps<T>) {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div>
      <InputLabel inputName={name} />
      <div className="bg-brand-500 hover:bg-brand-600 mt-4 mb-4 w-68 cursor-pointer rounded-md">
        <input
          id={name}
          className="file:bg-brand-800 file:text-brand-50 file:hover:bg-brand-950 file:disabled:bg-brand-800 appearance-none text-sm text-white file:mr-5 file:cursor-pointer file:rounded-md file:border-none file:px-3 file:py-4 file:font-medium file:transition-all disabled:cursor-not-allowed file:sm:px-6 file:sm:text-sm"
          {...props}
          {...register(name)}
          type="file"
        />
        {errorMessage && (
          <Paragraph className="text-sm text-red-500">{errorMessage}</Paragraph>
        )}
      </div>
    </div>
  );
}

export default FileInput;
