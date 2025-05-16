import { useState } from "react";
import CartProgressStepper from "./CartProgressStepper";
import CartContainer from "./CartContainer";
import { products } from "@/utils/dummy-data";
import { Product } from "@/interfaces/Product";
import CartProductList from "./CartProductList";
import OrderSummary from "./OrderSummary";

function Cart() {
  const [activeStep, setActiveStep] = useState(0);

  const filteredProducts: Product[] = products.filter(
    (product) => product.isWishlisted === true,
  );

  return (
    <div className="pt-4">
      <CartProgressStepper activeStep={activeStep} />
      <CartContainer>
        <CartProductList products={filteredProducts} />
        <OrderSummary
          activeStep={activeStep}
          handleActiveStep={setActiveStep}
        />
      </CartContainer>
    </div>
  );
}

export default Cart;
