import { IoHeart, IoShirt, IoSparkles } from "react-icons/io5";
import BentoBlockLink from "@/components/ui/BentoBlockLink";
import SliderWrapper from "@/components/ui/SliderWrapper";
import PromoBanner from "@/components/ui/PromoBanner";

function HomePage() {
  return (
    <>
      <div className="mb-10 flex w-full items-center justify-center p-6 lg:p-0">
        <div className="flex w-full grid-cols-1 flex-col gap-10 sm:grid-rows-4 lg:grid lg:grid-cols-10 lg:[grid-template-rows:0.2fr_1fr]">
          <PromoBanner
            glassy={false}
            headingText={
              <>
                New Phone, <span className="highlighted">New You.</span>
              </>
            }
            description="Upgrade your style, power up your life. Discover the latest iPhone and
          start fresh with tech that matches your ambition."
            linkTo="/products/phones"
            ctaText="Shop Now"
            imgSrc="/hand-holding-iphone.png"
            imgAlt="Hand holding an iPhone"
          />

          <BentoBlockLink
            heading="Shop now, wear forever."
            paragraph="Elevate your wardrobe with timeless styles that never go out of fashion. Shop now and enjoy pieces that last season after season."
            className="hover:bg-secondary-600 bg-secondary-500 p-8 pb-0 lg:h-[10.4rem] lg:pb-8"
            image="/woman-portrait.png"
            imageAlt="Stylish woman with a flower in her mouth."
            imageMargin="lg:mt-2"
            rowSpan="lg:row-span-1"
            imageClassName="w-64 lg:max-w-50"
            linkTo="/products/clothes"
          />

          <div className="group mt-2 flex flex-col rounded-3xl lg:col-span-5 lg:row-span-1">
            <SliderWrapper
              headingText="Your Wishlist"
              icon={<IoHeart className="text-red-500" />}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 p-6 lg:p-0">
        <BentoBlockLink
          heading="Upgrade Your Everyday – Find the Perfect Phone for You"
          paragraph="From flagship models with cutting-edge innovation to affordable options that get the job done, our collection is designed to meet every need. And with exclusive deals, fast delivery, and easy returns, upgrading your phone has never been this simple.
  Don’t wait to experience faster speeds, longer battery life, and stunning displays."
          className="hover:bg-brand-600 bg-brand-500 px-12 pt-12 lg:pt-0"
          image="/iphone.png"
          imageAlt="Stylish woman with a flower in her mouth."
          imageMargin="lg:mt-2"
          rowSpan="lg:row-span-1"
          imageClassName="w-64 lg:mr-5 mx-auto"
          linkTo="/products/phones"
        />
        <SliderWrapper
          headingText="New Arrivals"
          icon={<IoSparkles className="text-secondary-500" />}
        />
        <SliderWrapper
          headingText="Clothing"
          icon={<IoShirt className="text-secondary-500" />}
        />
      </div>
    </>
  );
}

export default HomePage;
