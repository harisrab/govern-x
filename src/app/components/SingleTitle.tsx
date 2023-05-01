const SingleTitle = ({ title, desc }: any) => {
  return (
    <div className="mb-6">
      <h1 className="text-[20px] mb-2 font-semibold">{title}</h1>
      <p className="max-w-xl text-[15px] text-white/[0.6]">{desc}</p>
    </div>
  );
};

export default SingleTitle;
