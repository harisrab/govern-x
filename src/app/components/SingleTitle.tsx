const SingleTitle = ({ title, desc }: any) => {
  return (
    <div className="mb-6 border-b-white/[0.1] border-b-[1px] pb-10 last-of-type:border-b-0">
      <h1 className="text-[20px] mb-2 font-semibold">{title}</h1>
      <div className="flex mt-5 gap-4 text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>

        <p className="max-w-xl text-[15px] text-white/[0.6]">{desc}</p>
      </div>
    </div>
  );
};

export default SingleTitle;
