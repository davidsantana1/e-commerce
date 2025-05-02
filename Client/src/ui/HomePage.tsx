import { IoArrowForwardCircle } from "react-icons/io5";
import ButtonWithIcon from "./ButtonWithIcon";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import BentoBlockLink from "./BentoBlockLink";
import SliderWrapper from "@/app/components/ui/SliderWrapper";

function HomePage() {
  return (
    <div className="flex w-full items-center justify-center p-6 lg:p-0">
      <div className="flex min-h-screen w-full grid-cols-1 flex-col gap-4 sm:grid-rows-4 lg:grid lg:grid-cols-10 lg:[grid-template-rows:0.2fr_1fr_1fr]">
        <div className="glass relative flex flex-col rounded-3xl p-8 pb-0 sm:row-span-8 lg:col-span-5 lg:row-span-2 lg:flex-row lg:overflow-hidden lg:pr-0">
          <div className="flex flex-col self-center pb-8">
            <Heading margin="md" size="xxl" weight="bold">
              New Phone, <span className="highlighted">New You.</span>
            </Heading>
            <Paragraph margin="lg" variant="dark">
              Upgrade your style, power up your life. Discover the latest iPhone
              and start fresh with tech that matches your ambition.
            </Paragraph>
            <ButtonWithIcon
              to="/products/phones"
              icon={<IoArrowForwardCircle />}
            >
              Shop Now
            </ButtonWithIcon>
          </div>
          <img
            className="mt-7 max-h-[80vh] w-xs self-center object-contain select-none lg:w-xs lg:self-auto"
            src="/hand-holding-iphone.png"
            alt="Hand holding an iPhone"
          />
        </div>
        <BentoBlockLink
          icon={<IoArrowForwardCircle className="-rotate-45" />}
          heading="Shop now, wear forever."
          paragraph="Elevate your wardrobe with timeless styles that never go out of fashion. Shop now and enjoy pieces that last season after season."
          className="hover:bg-secondary-600 bg-secondary-500"
          image="/woman-portrait.png"
          imageAlt="Stylish woman with a flower in her mouth."
          imageMargin="lg:mt-2"
          rowSpan="lg:row-span-1"
        />

        <div className="group mt-4 flex flex-col rounded-3xl lg:col-span-5 lg:row-span-1">
          <SliderWrapper />
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-full lg:row-span-1">
          <SliderWrapper />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
