import { SubmitHandler, useForm } from "react-hook-form";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import ActionButton from "@/components/ui/ActionButton";

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  password: string;
};

function AccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div className="flex flex-col">
        <Form<Inputs>
          id="account"
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
        >
          <Input<Inputs>
            name="firstName"
            register={register}
            placeholder="John"
            type="text"
            errors={errors}
          />
          <Input<Inputs>
            name="lastName"
            register={register}
            placeholder="Doe"
            type="text"
            errors={errors}
          />
          <Input<Inputs>
            name="phoneNumber"
            register={register}
            placeholder="123-456-7891"
            type="text"
            errors={errors}
          />
          <Input<Inputs>
            name="dateOfBirth"
            register={register}
            type="date"
            errors={errors}
          />
        </Form>
        <ActionButton form="account">Save</ActionButton>
      </div>
    </>
  );
}

export default AccountForm;
