import { IoCard, IoCart, IoClipboard } from "react-icons/io5";

const icons = [
  {
    icon: IoCart,
    name: "Cart",
    translateX: "160%",
  },
  {
    icon: IoCard,
    name: "Checkout",
    translateX: "210%",
  },
  {
    icon: IoClipboard,
    name: "Order",
  },
];

interface CartProgressStepperProps {
  activeStep: number;
}

function CartProgressStepper({ activeStep }: CartProgressStepperProps) {
  return (
    <div className="bg-brand-500 relative mb-6 flex items-center justify-center rounded-xl px-6 py-4">
      {icons.map((icon, index) => (
        <div key={index} className="relative flex items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              className={`${activeStep === index && "!bg-secondary-500"} bg-secondary-200 rounded-full p-2 sm:p-3`}
            >
              <icon.icon className="text-white" size={25} />
            </div>
            <span className="text-xs text-white sm:text-base">{icon.name}</span>
          </div>
          {index < icons.length - 1 && (
            <div className="mx-4 h-0.5 w-3 border-t-2 border-dashed sm:w-16 lg:w-24" />
          )}
        </div>
      ))}
    </div>
  );
}

export default CartProgressStepper;
