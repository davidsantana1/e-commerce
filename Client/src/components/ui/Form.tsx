import { ChildrenProps } from "@/interfaces/ChildrenProps";
import { SubmitHandler } from "react-hook-form";

interface FormProps<T> extends ChildrenProps {
  id?: string;
  onSubmit: SubmitHandler<T>;
  handleSubmit: (
    onValid: SubmitHandler<T>,
  ) => (e?: React.BaseSyntheticEvent) => void;
}

function Form<T>({ handleSubmit, onSubmit, children, ...props }: FormProps<T>) {
  return (
    <form
      className="grid grid-cols-2 gap-8"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
