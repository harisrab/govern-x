import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="mt-24 flex justify-center flex-col lg:flex-row items-center w-full selection:text-blue-200 selection:bg-blue-600/[0.1]">
      <div className="mb-[20px] w-full pl-6 sm:pl-20">
        <h1 className="w-full font-semibold text-[25px]  lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-300">
          AI Agents for Enterprise Operations
        </h1>
        <div className="w-full">
          <p className="w-full font-semibold text-[20px] h-14 lg:text-[25px] text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-500">
            <Typewriter
              words={[
                "Shift nurse Xiāng from Ward A to Emergency",
                "Generate a patient satisfaction report for last month.",
                "Reserve a conference room for the staff meeting on Friday.",
                "Compile a list of patients due for follow-up appointments.",
                "Analyze patient wait times in the emergency department.",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </p>
          <p className="w-full max-x-3xl my-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-400 max-w-2xl">
            Our AI Agents are trained to perform in a high data security
            environment, with access to your tools, diverse data sources for
            optimizing dynamic business workflows.
          </p>

          <ul className="mt-10">
            <li className="text-[18px] pl-10 text-white/[0.6] hover:cursor-pointer hover:text-white duration-200 w-fit">
              Sandboxed and secure GPTs
              <span className="text-[24px] ml-4">↗</span>
            </li>
            <li className="text-[18px] pl-10 text-white/[0.6] hover:cursor-pointer hover:text-white duration-200 w-fit">
              Customizable workflows
              <span className="text-[24px] ml-4">↗</span>
            </li>
            <li className="text-[18px] pl-10 text-white/[0.6] hover:cursor-pointer hover:text-white duration-200 w-fit">
              Secure, Compliant, and Auditable
              <span className="text-[24px] ml-4">↗</span>
            </li>
            <li className="text-[18px] pl-10 text-white/[0.6] hover:cursor-pointer hover:text-white duration-200 w-fit">
              Fully upgradable
              <span className="text-[24px] ml-4">↗</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Image */}
      <div className="h-[500px] w-[400px] lg:w-[1100px] lg:h-[640px] sm:my-20 lg:my-10 my-20 flex items-center justify-center">
        <div className="w-full h-full relative">
          <Image
            quality={100}
            priority
            src={"/mobile2.png"}
            alt={"Govern X Logo"}
            fill
            style={{
              objectFit: "contain",
              objectPosition: "center",
              scale: 1.2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
