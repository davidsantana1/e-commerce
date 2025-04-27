import { FaShieldDog } from "react-icons/fa6";
import Heading from "./Heading";
import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="flex gap-2">
      <FaShieldDog size={30} />
      <Heading tint="dark" as="h2" size="lg" weight="bold">
        Terranova
      </Heading>
    </Link>
  );
}

export default Logo;
