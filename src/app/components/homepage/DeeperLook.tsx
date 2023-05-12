import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SingleTitle from "../SingleTitle";

const DeeperLook = () => {
  return (
    <div className="w-full flex items-center justify-between flex-col lg:flex-row lg:h-[800px] px-6 sm:px-20 ">
      {/* Headings */}
      <div>
        {/* First */}
        <SingleTitle
          title={"Customized Role-based Chat Interface"}
          desc={
            "Govern Corp allows different operators to have different Chat UI controls with different tools. Patients access the system via WhatsApp, while operators within the hospital use Hydra to get the job done."
          }
        />
        {/* Second */}
        <SingleTitle
          title={"Perform wide range of tasks"}
          desc={
            "Hospital administration can use this system to streamline many operations such as instant information retrieval and updating vast records, helping care-givers to be fast and more productive with time. "
          }
        />
        {/* Third */}
        <SingleTitle
          title={"Source-citations and truthfulness"}
          desc={
            "Hospital administration can use this system to streamline many operations such as instant information retrieval and updating vast records, helping care-givers to be fast and more productive with time. "
          }
        />
      </div>

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        showArrows={false}
        interval={5000}
        className="overflow-hidden w-[450px] h-[450px]"
        swipeable
      >
        <div className="w-[450px] h-[450px]">
          <Image
            src="/hydra_detail/h1.png"
            alt="hydra_detail"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-[450px] h-[450px]">
          <Image
            src="/hydra_detail/h2.png"
            alt="hydra_detail"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-[450px] h-[450px]">
          <Image
            src="/hydra_detail/h3.png"
            alt="hydra_detail"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-[450px] h-[450px]">
          <Image
            src="/hydra_detail/h4.png"
            alt="hydra_detail"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default DeeperLook;