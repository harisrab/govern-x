import Image from "next/image";

const KnowledgeBase = () => {
  return (
    <div className="w-full  px-10 sm:px-20 my-20">
      <span className="uppercase tracking-[3px] text-[12px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        Govern Corp&apos;s AI Operations Platform
      </span>
      <h1 className="w-full max-w-[500px] mt-2 font-semibold text-[20px] sm:text-[25px]  lg:text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-[#006BFF] to-blue-300">
        Build Your Private Long Term Memory so It&apos;s Chat Accessible
      </h1>

      <ul className="flex items-center justify-between flex-wrap mt-20 gap-10 gap-x-2">
        <li className="">
          <div className="p-[1px] flex items-center justify-center bg-gradient-to-br from-white/[0.2] rounded-[5px] to-white/[0.08] w-fit">
            <div className="w-[300px] h-[250px] rounded-[5px] bg-[#090909] flex flex-col p-4">
              <span className="uppercase tracking-[4px] text-[13px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                INGEST
              </span>
              <div className="relative w-full h-[40px] my-5">
                <Image
                  src={"/ingest2.png"}
                  alt="ingest"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <p className="text-[13px] text-white/[0.6]">
                Collect your data into the knowledge base and integrate it with
                connectors, custom code, which includes Google Drives, AWS, to
                private data sources so it can be used within the chat system
                for interrogation.
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="p-[1px] flex items-center justify-center bg-gradient-to-br from-white/[0.2] rounded-[5px] to-white/[0.08] w-fit">
            <div className="w-[300px] h-[250px] rounded-[5px] bg-[#090909] flex flex-col p-4">
              <span className="uppercase tracking-[4px] text-[13px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                EMBED
              </span>
              <div className="relative w-full h-[40px] my-5 opacity-70">
                <Image
                  src={"/embed.png"}
                  alt="ingest"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <p className="text-[12px] text-white/[0.6]">
                Convert the ingested knowledge into embedding tables so they can
                be accessed and referenced for source citations, serving as Long
                Term Memory for Large Language Models.
              </p>
            </div>
          </div>
        </li>
        <li className="">
          <div className="p-[1px] flex items-center justify-center bg-gradient-to-br from-white/[0.2] rounded-[5px] to-white/[0.08] w-fit">
            <div className="w-[300px] h-[250px] rounded-[5px] bg-[#090909] flex flex-col p-4">
              <span className="uppercase tracking-[4px] text-[13px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                FINE-TUNE
              </span>

              <p className="text-[12px] text-white/[0.6] my-4 mb-1">
                We allow you to fine-tune Large Language Models on ingested and
                embedded data, which allows for:
              </p>

              <div className="text-[12px] text-white/[0.6] flex gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#006BFF]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>
                  Greater understanding of your business to provide more
                  relevant responses.
                </p>
              </div>
              <div className="text-[12px] text-white/[0.6] flex gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#006BFF]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>
                  Improved handling of industry specific jargon resulting in
                  more accurate responses.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="">
          <div className="p-[1px] flex items-center justify-center bg-gradient-to-br from-white/[0.2] rounded-[5px] to-white/[0.08] w-fit">
            <div className="w-[300px] h-[250px] rounded-[5px] bg-[#090909] flex flex-col p-4">
              <span className="uppercase tracking-[4px] text-[13px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                RLHF
              </span>

              <p className="text-[12px] text-white/[0.6] my-4 mb-1">
                Performing Reinforcement Learning from Human Feedback can help
              </p>

              <div className="text-[12px] text-white/[0.6] flex gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#006BFF]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>
                  Adapt to different communication styles and preferences for
                  highly optimal assistance.
                </p>
              </div>
              <div className="text-[12px] text-white/[0.6] flex gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#006BFF]"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>
                  Improve understanding of language models against diverse and
                  complex prompts.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default KnowledgeBase;
