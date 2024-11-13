import Link from "next/link";

const NavLink = ({ href, title, postRouteHandlers = [] }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onBlur={() => postRouteHandlers.forEach(([handler, ...args]) => handler(...args))}
    >
      {title}
    </Link>
  );
};

export default NavLink;
