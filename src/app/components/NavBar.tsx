import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-0 w-full border-b-[1px] border-b-white/[0.01] border-dashed">
      {/* Nav Bar */}
      <div className="h-24 flex items-center hover:opacity-60 duration-200 w-fit hover:cursor-pointer ">
        <Link href="/">
          <Image
            src={"/logo.svg"}
            height={26}
            width={110}
            alt={"Govern X Logo"}
          />
        </Link>
      </div>

      <div className="h-24 col-span-1 lg:flex items-center justify-center hidden">
        <div className="">
          <ul className="flex bg-white/[0.02] text-[15px] p-1 rounded-full">
            <li className="hover:bg-white/[0.05] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
              Vision
            </li>
            <li className="hover:bg-white/[0.05] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
              Offerings
            </li>
            <li className="hover:bg-white/[0.05] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
              Blog
            </li>
          </ul>
        </div>
      </div>
      <div className="h-24 items-center justify-end flex">
        <Link href="https://www.linkedin.com/company/govern-x/">
          <button className="bg-blue-500 hover:bg-blue-500/[0.6] duration-200 px-4 py-2 rounded-full text-[15px]">
            Get in touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
