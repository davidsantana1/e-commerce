import Heading from "@/components/ui/Heading";
import AccountForm from "./AccountForm";

function Account() {
  return (
    <div className="flex w-full flex-col items-center pt-8 sm:pt-0 xl:pt-2">
      <Heading className="text-4xl" margin="lg" weight="bold">
        My Account
      </Heading>
      <AccountForm />
    </div>
  );
}

export default Account;
