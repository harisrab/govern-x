const Block = ({ heading, firstLine, secondLine, thirdLine }: any) => {
  return (
    <div className="flex flex-col justify-start hover:border-white/[0.1] min-w-full sm:min-w-[400px] h-[350px] flex-1 bg-[#fff]/[0.04] hover:bg-[#B3B3B3]-600/[0.3] duration-200 p-6">
      <h1 className="mb-4 text-[18px]">{heading}</h1>
      <div className="">
        <div className="mb-3">
          <p className="">{firstLine[0]}</p>
          <p className="text-[13px] mt-1 text-white/[0.5]">{firstLine[1]}</p>
        </div>
        <div className="mb-3">
          <p>{secondLine[0]}</p>
          <p className="text-[13px] mt-1 text-white/[0.5]">{secondLine[1]}</p>
        </div>
        <div className="mb-3">
          <p>{thirdLine[0]}</p>
          <p className="text-[13px] mt-1 text-white/[0.5]">{thirdLine[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Block;
