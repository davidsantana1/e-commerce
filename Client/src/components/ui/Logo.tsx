import { FaShieldDog } from "react-icons/fa6";
import Heading from "./Heading";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  logoSize?: number;
}

function Logo({ className, logoSize = 30 }: LogoProps) {
  return (
    <Link to="/" className={`${className} flex gap-2`}>
      <FaShieldDog size={logoSize} />
      <Heading tint="dark" as="h2" size="lg" weight="bold">
        Terranova
      </Heading>
    </Link>
  );
}

export default Logo;
