import Image from "next/image";

const Hydra = () => {
  return (
    <div className="w-full  px-10 sm:px-20 my-20 flex flex-col items-center">
      <h1 className="w-full text-center mt-2 font-semibold text-[20px] sm:text-[45px]  lg:text-[45px] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Hydra
      </h1>

      <p className="text-center w-full text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 max-w-3xl mt-4">
        An all-in-one chat system that automates customer engagement, internal
        copiloting, and returns intelligent, personalized responses from custom
        databases with source citations.
      </p>

      <div className="w-full mt-20 flex justify-between flex-wrap gap-10 gap-x-5">
        <div>
          <h3 className="text-[23px] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Dynamic UI
          </h3>
          <p className="max-w-[320px] text-[14px] mt-2 text-white/[0.5]">
            Text is a non-ideal interface for displaying information from
            complicated and data-rich assets. We&apos;re building the
            integration to perform dynamic UI construction that adapts UI to
            your queries.
          </p>
        </div>
        <div>
          <h3 className="text-[23px] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Source-cited responses
          </h3>
          <p className="max-w-[320px] text-[14px] mt-2 text-white/[0.5]">
            ChatGPT throughputs responses that can be non-truthful. We ensure
            all responses are cited from verified sources to ensure system
            integrity in rapidly moving workflows.
          </p>
        </div>
        <div>
          <h3 className="text-[23px] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
            Fully Customizable
          </h3>
          <p className="max-w-[320px] text-[14px] mt-2 text-white/[0.5]">
            We help tailor the entire dashboard to your enterprise with custom
            UI and UX. This allows for more features to be built-in that are
            consistent with your company&apos;s workflows.
          </p>
        </div>
      </div>

      <div className="w-full h-[800px] flex mt-20  relative">
        <Image
          src={"/hydra2.png"}
          alt="hydra_interface"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Hydra;
