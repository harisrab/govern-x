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
            {/* <li className="hover:bg-white/[0.05] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
              Vision
            </li> */}
            <Link href="https://docs.governcorp.com/release-notes">
              <li className="hover:bg-white/[0.05] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
                Changelog
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="h-24 items-center justify-end flex">
        <Link href="https://app.governcorp.com">
          <button className="bg-white flex gap-2 hover:bg-white/[0.9] duration-200 text-black font-light mb-0 items-center px-4 py-2 rounded-full text-[15px]">
            <p className="flex items-center -mb-[2px]">Get started</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
