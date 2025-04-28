import { IoArrowForwardCircle } from "react-icons/io5";
import ButtonWithIcon from "./ButtonWithIcon";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import BentoBlockLink from "./BentoBlockLink";

function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 lg:p-0">
      <div className="flex h-screen w-full grid-cols-1 grid-rows-14 flex-col gap-4 sm:grid-rows-4 lg:grid lg:grid-cols-10">
        <div className="glass relative flex flex-col rounded-3xl p-8 pb-0 sm:row-span-8 lg:col-span-5 lg:row-span-3 lg:flex-row lg:overflow-hidden lg:pr-0">
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
            className="w-xs self-center object-cover select-none lg:w-auto lg:self-auto"
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

        <div className="slider-wrapper flex flex-col rounded-3xl lg:col-span-5 lg:row-span-2">
          <div className="slider rounded-3xl">
            <img
              id="slide-1"
              src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary orange planet in space"
            />
            <img
              id="slide-2"
              src="https://images.unsplash.com/photo-1657586640569-4a3d4577328c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary green planet in space"
            />
            <img
              id="slide-3"
              src="https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="3D rendering of an imaginary blue planet in space"
            />
          </div>
          <Heading
            className="absolute mt-4 self-center"
            tint="light"
            size="xl"
            weight="bold"
          >
            My product name
          </Heading>
          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
        <div className="glass flex items-center justify-center rounded-3xl p-8 lg:col-span-10 lg:row-span-2">
          Hellog
        </div>
      </div>
    </div>
  );
}

export default HomePage;
