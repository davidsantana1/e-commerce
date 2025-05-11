import { SubmitHandler, useForm } from "react-hook-form";
import Form from "@/components/ui/Form";
import Input from "@/components/ui/Input";
import ActionButton from "@/components/ui/ActionButton";

type Inputs = {
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
};

function AddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col">
      <Form<Inputs>
        id="address"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <Input<Inputs>
          name="addressLine1"
          register={register}
          placeholder="8400 NW ST 100"
          type="text"
          errors={errors}
        />
        <Input<Inputs>
          name="addressLine2"
          register={register}
          placeholder="2600 SW ST 33"
          type="text"
          errors={errors}
        />
        <Input<Inputs>
          name="country"
          register={register}
          placeholder="United States"
          type="text"
          errors={errors}
        />
        <Input<Inputs>
          name="city"
          register={register}
          placeholder="Miami"
          type="text"
          errors={errors}
        />
        <Input<Inputs>
          name="state"
          register={register}
          placeholder="FL"
          type="text"
          errors={errors}
        />
        <Input<Inputs>
          name="postalCode"
          register={register}
          placeholder="33198"
          type="text"
          errors={errors}
        />
      </Form>
      <ActionButton form="address">Save</ActionButton>
    </div>
  );
}

export default AddressForm;
