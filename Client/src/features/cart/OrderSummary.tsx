import Heading from "@/components/ui/Heading";
import { Dispatch } from "react";
import SummaryRow from "./SummaryRow";
import CouponInput from "./CouponInput";

interface OrderSummaryProps {
  activeStep: number;
  handleActiveStep: Dispatch<React.SetStateAction<number>>;
}

function OrderSummary({ activeStep, handleActiveStep }: OrderSummaryProps) {
  return (
    <div className="bg-secondary-500 text-secondary-50 flex flex-col justify-between rounded-xl p-8">
      <div>
        <div className="mb-6">
          <Heading
            className="border-secondary-300 border-b-1 pb-4 text-xl"
            weight="bold"
          >
            Order Summary
          </Heading>
          <SummaryRow label="Subtotal" value="120.45" />
          <SummaryRow label="Tax" value="19.88" />
        </div>
        <CouponInput />
        <SummaryRow borderPosition="t" label="Total" value="140.33" />
      </div>

      <button
        onClick={() =>
          handleActiveStep((step) => {
            return activeStep !== 2 ? activeStep + 1 : step;
          })
        }
        className="bg-brand-500 font-md w-full cursor-pointer rounded-xl px-5 py-3"
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default OrderSummary;
