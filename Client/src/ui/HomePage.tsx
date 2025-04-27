import { IoArrowForwardCircle } from "react-icons/io5";
import ButtonWithIcon from "./ButtonWithIcon";
import Heading from "./Heading";

function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 lg:p-0">
      <div className="flex h-screen w-full grid-cols-1 grid-rows-14 flex-col gap-4 lg:grid lg:grid-cols-10 lg:grid-rows-4">
        <div className="glass relative flex flex-col rounded-3xl p-8 pb-0 lg:col-span-5 lg:row-span-3 lg:flex-row lg:pr-0">
          <div className="flex flex-col self-center pb-8 lg:absolute">
            <Heading
              className="col-span-1"
              margin="md"
              size="xxl"
              weight="bold"
            >
              New Phone,
              <br className="none lg:flex" />
              New You.
            </Heading>
            <p className="mb-5">
              Upgrade your style, power up your life. Discover <br /> the latest
              iPhone and start fresh with tech that <br /> matches your
              ambition.
            </p>
            <ButtonWithIcon icon={<IoArrowForwardCircle />}>
              Shop Now
            </ButtonWithIcon>
          </div>
          <img
            className="w-xs object-cover select-none lg:w-auto lg:translate-x-55"
            src="/iphone.png"
            alt="Hand holding an iPhone"
          />
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-5 lg:row-span-1">
          Helloa
        </div>

        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-5 lg:row-span-2">
          Hellob
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-5 lg:row-span-2">
          Hellog
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-5 lg:row-span-2">
          Hello
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-10 lg:row-span-1">
          Hello
        </div>
      </div>
    </div>
  );
}

export default HomePage;
