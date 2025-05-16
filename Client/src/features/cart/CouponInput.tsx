import Heading from "@/components/ui/Heading";
import { useState } from "react";
import { IoRemoveCircle, IoSend } from "react-icons/io5";

function CouponInput() {
  const [coupon, setCoupon] = useState("");

  function handleSetCoupon(value: string) {
    setCoupon(value);
  }
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <Heading className="text-xl">Add a coupon</Heading>
        <IoRemoveCircle
          onClick={() => handleSetCoupon("")}
          className="hover:text-secondary-100 cursor-pointer"
          size={25}
        />
      </div>
      <div className="relative">
        <input
          value={coupon}
          onChange={(e) => handleSetCoupon(e.target.value)}
          className="bg-secondary-600 placeholder:text-secondary-200 focus:outline-secondary-50 w-full rounded-xl px-5 py-2 focus:outline-3"
          placeholder="Enter your code"
        />
        <div className="bg-secondary-800 absolute top-0 right-0.5 cursor-pointer rounded-r-xl p-3">
          <IoSend className="text-secondary-50" />
        </div>
      </div>
    </div>
  );
}

export default CouponInput;
