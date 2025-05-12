import Heading from "@/components/ui/Heading";
import AddressForm from "./AddressForm";

function Address() {
  return (
    <div className="flex w-full flex-col items-center p-6 pt-12 xl:pt-2">
      <Heading className="text-4xl" margin="lg" weight="bold">
        My Address
      </Heading>
      <AddressForm />
    </div>
  );
}

export default Address;
