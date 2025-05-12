import { useState } from "react";
import CartProgressStepper from "./CartProgressStepper";
import CartContainer from "./CartContainer";
import Heading from "@/components/ui/Heading";
import { IoRemoveCircle, IoSend } from "react-icons/io5";
import { products } from "@/utils/dummy-data";
import { Product } from "@/interfaces/Product";
import Counter from "@/components/ui/Counter";
import { Link } from "react-router";

function Cart() {
  const [activeStep, setActiveStep] = useState(0);
  const [coupon, setCoupon] = useState("");

  function handleSetCoupon(value: string) {
    setCoupon(value);
  }
  const filteredProducts: Product[] = products.filter(
    (product) => product.isWishlisted === true,
  );

  console.log(filteredProducts);

  return (
    <div className="pt-4">
      <CartProgressStepper activeStep={activeStep} />
      <CartContainer>
        <div className="px-5">
          <div className="flex justify-between border-b-1 border-stone-500 pb-4 text-stone-500">
            <Heading>Products</Heading>
            <Heading className="pr-11">Total</Heading>
          </div>
          <div className="divide-brand-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-brand-700 scrollbar-track-brand-300 mb-8 h-[26.4rem] divide-y-2 overflow-y-scroll lg:mb-0">
            {filteredProducts.map((product) => (
              <div className="flex items-center justify-between py-4">
                <Link
                  to={`/products/${product.category}/${product.id}`}
                  className="flex items-center"
                >
                  <img
                    src={product.imgSrc}
                    className="mr-5 h-24 w-24 rounded-xl object-cover"
                  />
                  <span className="text-sm sm:text-base">{product.name}</span>
                </Link>
                <div className="flex items-center pr-5">
                  <span className="mr-5 text-sm font-bold sm:text-base">
                    ${product.price}.00
                  </span>
                  <Counter />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary-500 text-secondary-50 flex flex-col justify-between rounded-xl p-8">
          <div>
            <div className="mb-6">
              <Heading
                className="border-secondary-300 border-b-1 pb-4 text-xl"
                weight="bold"
              >
                Order Summary
              </Heading>
              <div className="border-secondary-300 flex justify-between border-b-1">
                <p className="text-secondary-50 py-3 text-lg">Subtotal</p>
                <p className="py-3 text-lg">$120.45</p>
              </div>

              <div className="border-secondary-300 flex justify-between border-b-1">
                <p className="text-secondary-50 py-3 text-lg">Tax</p>
                <p className="py-3 text-lg">$19.88</p>
              </div>
            </div>
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

            <div className="border-secondary-300 text-secondary-50 flex justify-between border-t-1 pt-3 pb-6 text-lg">
              <p>Total</p>
              <p>$140.33</p>
            </div>
          </div>
          <button
            onClick={() =>
              setActiveStep((step) => {
                return activeStep !== 2 ? activeStep + 1 : step;
              })
            }
            className="bg-brand-500 font-md w-full cursor-pointer rounded-xl px-5 py-3"
          >
            Proceed to checkout
          </button>
        </div>
      </CartContainer>
    </div>
  );
}

export default Cart;
