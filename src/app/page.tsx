import Image from "next/image";
import BlocksSet from "./components/BlocksSet";
import CustomSoftwareFrame from "./components/CustomSoftwareFrame";
import ExampleSection from "./components/ExampleSection";
import SingleTitle from "./components/SingleTitle";

export default function Home() {
  return (
    <main className="w-full h-screen px-10 sm:px-20 relative max-w-[1600px] font-alliance flex flex-col items-center">
      {/* Background layers */}


      {/* Main page content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 w-full border-b-[1px] border-b-white/[0.1]">
        {/* Nav Bar */}
        <div className="h-24 flex items-center hover:opacity-60 duration-200 w-fit hover:cursor-pointer ">
          <Image
            src={"/logo.svg"}
            height={26}
            width={110}
            alt={"Govern X Logo"}
          />
        </div>
        <div className="h-24 col-span-1 lg:flex items-center justify-center hidden">
          <div className="">
            <ul className="flex bg-white/[0.1] text-[15px] p-1 rounded-full">
              <li className="hover:bg-white/[0.2] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
                Vision
              </li>
              <li className="hover:bg-white/[0.2] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
                Offerings
              </li>
              <li className="hover:bg-white/[0.2] hover:cursor-pointer bg-white/[0.0] duration-150 rounded-full px-4 py-2 h-full">
                Blog
              </li>
            </ul>
          </div>
        </div>
        <div className="h-24 hidden items-center justify-end md:flex">
          <button className="bg-[#EA2A00] hover:bg-[#EA2A00]/[0.6] duration-200 px-4 py-2 rounded-full text-[15px]">
            Get in touch
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="col-start-1 col-span-3 mt-24 flex justify-center flex-col items-center ">
        <h1 className=" font-semibold text-center text-[30px] lg:text-[50px] text-transparent bg-clip-text bg-gradient-to-br from-[#EA2A00] to-[#FF9D7E]">
          AI-Powered Operations and Decision Making
        </h1>
        <p className="my-2 text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-400 max-w-2xl text-center">
          We’re building an AI platform that uses state of the art Artificial
          Intelligence to automate internal business, governmental operations,
          and customer engagement.
        </p>

        {/* Main Image */}
        <div className="h-[600px] lg:h-[500px] my-20 lg:my-10 mb-20 w-full flex items-center justify-center">
          <div className="w-full h-full hidden lg:block relative">
            <Image
              quality={100}
              priority
              src={"/hero_img_otint_full.png"}
              alt={"Govern X Logo"}
              fill
              style={{
                objectFit: "contain",
                objectPosition: "center",
                scale: 1.2,
              }}
            />
          </div>
          <div className="w-full h-full relative block lg:hidden">
            <Image
              quality={100}
              priority
              src={"/hero_mobile_view.png"}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {/* 6 Feature Cards */}
        <div className="col-span-3 flex items-center justify-between flex-wrap mb-20">
          <BlocksSet />
        </div>
      </div>

      {/* System breakdown */}
      <div className="w-full flex items-center justify-between flex-col lg:flex-row lg:h-[800px]">
        {/* Headings */}
        <div>
          {/* First */}
          <SingleTitle
            title={"Sandboxed ChatGPT ensures data security"}
            desc={
              "Deploy sandboxed Large Language Models on your channels of communication, which allow for high data security. These can be hosted on Govern X’s platform or your own servers."
            }
          />
          {/* Second */}
          <SingleTitle
            title={"Omni-channel communication options"}
            desc={
              "From WhatsApp, Discord, Web Integrations, Messenger, and custom chatbot interfaces that open expert interfaces, you have the option to use any sales funnel to drive automation of customer engagement on any platform, either for internal use or external communications."
            }
          />
          {/* Third */}
          <SingleTitle
            title={"Open-source, homegrown, or commercial LLMs"}
            desc={
              "Our platform doesn’t just rely on Language Models built by OpenAI. We ensure you can select and use open-source models like Vicuna and LLaMA, as well as deploy the ones that have been fine-tuned and homegrown to suit your business needs."
            }
          />
        </div>

        {/* Side of system */}
        <div className="relative h-[400px] mt-20 mb-20 lg:mb-0 lg:mt-0 lg:h-full w-[470px]">
          <Image
            src={"/sys_diagram.png"}
            alt={"Govern X Logo"}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>

      {/* Repeatable section on conversation examples */}
      <ExampleSection
        title={"Healthcare"}
        desc={
          "Hospitals, clinics, and pharmacies have significant customer interaction as they provide medical services and products. They need to generate analysis reports to monitor patient outcomes, track inventories, manage billings, and much more."
        }
        bullets={[
          {
            heading: "Appointment scheduling and cancellations",
            image: "/convos/healthcare/appointments.png",
          },
          {
            heading: "Prescription refills and medication inquiries",
            image: "/convos/healthcare/refills.png",
          },
          {
            heading: "Insurance coverage and claims processing",
            image: "/convos/healthcare/claims.png",
          },
          {
            heading: "Patient records and data management",
            image: "/convos/healthcare/management.png",
          },
        ]}
      />
      <ExampleSection
        title={"Governments"}
        desc={
          "Governments being the epitome of bureaucracy, with complex regulations, procedures, and red tape that can slow down processes and decision-making.  With AI to help governance can finally disrupt governance at scale."
        }
        bullets={[
          {
            heading: "Tax filing and payment assistance",
            image: "/convos/government/taxfill.png",
          },
          {
            heading: "License and permit applications",
            image: "/convos/government/permit.png",
          },
          {
            heading:
              "Public service inquiries (e.g., transportation, utilities, etc.)",
            image: "/convos/government/enquiriy.png",
          },
          {
            heading:
              "Reporting non-emergency issues (e.g., infrastructure, safety, etc.)",
            image: "/convos/government/reporting.png",
          },
          {
            heading: "Senior Bureaucrats Seeking Information ",
            image: "/convos/government/officer_info.png",
          },
        ]}
      />
      <ExampleSection
        title={"Utilities"}
        desc="Companies that provide electricity, water, gas, and internet services have to deal with high volume of customer interactions that are complex in nature and require human in loop. This is where GPTs shine in reducing bureaucracy and radically changing customer interaction."
        bullets={[
          {
            heading: "Billing inquiries and payment processing",
            image: "/convos/utilities/billing_inquiries.png",
          },
          {
            heading: "Energy usage monitoring and conservation tips",
            image: "/convos/utilities/energy_usage.png",
          },
          {
            heading: "Account management and service adjustments",
            image: "/convos/utilities/account_management.png",
          },
          {
            heading: "Copilot for senior managers in water supply company",
            image: "/convos/utilities/manager_copilot.png",
          },
        ]}
      />
      <ExampleSection
        title={"Courts"}
        desc="First step to protection of civil liberties and the rights of people is improved functioning of courts, swifter delivery of justice, and alleviating the bottlenecks in how court systems work so they’re not prone to bureaucracy and red-tape."
        bullets={[
          {
            heading: "Case information and updates",
            image: "/convos/courts/case_inquiry.png",
          },
          {
            heading: "Court Administrator Chatting with the System",
            image: "/convos/courts/admin.png",
          },
          {
            heading: "Access to Judicial Decisions and Precedents",
            image: "/convos/courts/precedents.png",
          },
          {
            heading:
              "Scheduling hearings, managing case files, and tracking deadlines",
            image: "/convos/courts/hearing.png",
          },
        ]}
      />

      <CustomSoftwareFrame
        title="Law Enforcement"
        desc="A crucial aspect of securing rights of people and ensuring protection of civil liberties is the functioning of law enforcement agencies. GPTs can help in improving the functioning of law enforcement agencies by reducing bureaucracy and red-tape through automoating routine tasks such as report generation, real-time communication, etc."
        bullets={[
          {
            heading: "Senior police officers requiring reports on incidents",
            image: "/convos/enforcement/police_reports.png",
          },
          {
            heading: "Optimized resource allocation",
            image: "/convos/enforcement/resource_allocation.png",
          },
          {
            heading: "Interrogate live assets and real-time data",
            image: "/convos/enforcement/live_assets.png",
          },
          {
            heading: "Protest control and investigation",
            image: "/convos/enforcement/real_time_comm.png",
          },
        ]}
      />
    </main>
  );
}
