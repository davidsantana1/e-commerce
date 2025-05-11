import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router";

const links = [
  {
    name: "My Account",
    to: "/account",
  },
  {
    name: "My Address",
    to: "/address",
  },
];

function ProfileButton() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="bg-brand-50 hover:bg-brand-200 flex cursor-pointer items-center justify-around gap-4 rounded-[22rem] lg:py-1 lg:pr-1 lg:pl-4">
            <p className="text-brand-900 hidden font-bold lg:flex">
              David Santana
            </p>
            <img
              src="/cs50cat.jpg"
              className="aspect-square h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
              alt="Profile Picture"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[999999] mr-4 w-[11rem] p-3 xl:mr-0">
          <DropdownMenuLabel className="text-xl font-bold">
            Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-brand-100" />
          {links.map((link) => (
            <DropdownMenuItem
              asChild
              className="hover:bg-brand-50 text-md cursor-pointer p-3 pl-2"
            >
              <Link key={link.to} to={link.to}>
                {link.name}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator className="bg-brand-100" />
          <DropdownMenuItem
            asChild
            className="group hover:bg-brand-50 text-md cursor-pointer p-3 pl-2 font-bold"
          >
            <Link
              className="text-red-500 group-hover:!text-red-600 hover:!text-red-600"
              to="/"
            >
              <IoLogOutOutline
                className="text-red-500 group-hover:!text-red-600"
                size={50}
              />
              <span>Log out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default ProfileButton;
