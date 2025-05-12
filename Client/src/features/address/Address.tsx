import Heading from "@/components/ui/Heading";
import AddressForm from "./AddressForm";

function Address() {
  return (
    <div className="flex w-full flex-col items-center pt-8 sm:pt-0 xl:pt-2">
      <Heading className="text-4xl" margin="lg" weight="bold">
        My Address
      </Heading>
      <AddressForm />
    </div>
  );
}

export default Address;
