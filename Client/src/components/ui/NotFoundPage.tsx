import { Link } from "react-router-dom";
import Heading from "./Heading";
import Logo from "./Logo";
import Paragraph from "./Paragraph";
import { IoArrowBack } from "react-icons/io5";
import Btn from "./Btn";

interface NotFoundPageProps {
  pageName: string;
}

function NotFoundPage({ pageName }: NotFoundPageProps) {
  return (
    <div className="mx-auto flex h-130 flex-col items-center justify-center gap-8 p-8 text-center">
      <Logo
        className="group mb-4 text-red-500 hover:text-red-600 [&>h2]:text-3xl [&>h2]:text-red-500 [&>h2]:group-hover:text-red-600"
        logoSize={35}
      />
      <div>
        <Heading className="text-red-500" size="xl">
          {pageName} Not Found
        </Heading>
        <Paragraph margin="md" variant="dark"></Paragraph>
      </div>
      <Btn variant="secondary">
        <Link to="/products" className="flex items-center gap-2 font-medium">
          <IoArrowBack />
          Back to All Categories
        </Link>
      </Btn>
    </div>
  );
}

export default NotFoundPage;
