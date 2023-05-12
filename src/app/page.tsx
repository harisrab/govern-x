"use client";
import Image from "next/image";
import Link from "next/link";

import BlocksSet from "./components/BlocksSet";
import CustomSoftwareFrame from "./components/CustomSoftwareFrame";
import ExampleSection from "./components/ExampleSection";
import NavBar from "./components/NavBar";
import SingleTitle from "./components/SingleTitle";
import HeroSection from "./components/homepage/HeroSection";
import SystemSection from "./components/homepage/SystemSection";

export default function Home() {
  return (
    <main className="w-full h-screen selection:text-blue-200 selection:bg-blue-600/[0.1] relative bg-black max-w-[1600px] font-alliance flex flex-col items-center">
      <div className="w-full px-6 sm:px-20">
        <NavBar />
      </div>

      {/* Hero Section Main Page */}
      <HeroSection />

      {/* System Diagram and Product Explaination */}
      <SystemSection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-40 px-6 sm:px-20 ">
        {/* 6 Feature Cards */}
        <div className="col-span-3 flex items-center justify-between flex-wrap mb-20">
          <BlocksSet />
        </div>
      </div>

      {/* System breakdown */}
      <div className="w-full flex items-center justify-between flex-col lg:flex-row lg:h-[800px] px-6 sm:px-20 ">
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
        <div className="relative h-[400px] mt-20 mb-20 lg:mb-0 lg:mt-0 lg:h-full w-[360px] sm:w-[470px] ">
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

      <footer className="w-full h-[50px] mt-20 border-t-[1px] border-t-white/[0.1] flex items-center justify-between py-10 px-6 sm:px-20">
        <div>Govern X © 2023. All rights reserved.</div>
        <div>
          <ul className="flex items-center gap-4">
            <Link target={"_blank"} href="https://wa.me/923305473022">
              <li className="bg-white/[0.05] rounded-sm p-2 flex items-center justify-center w-fit hover:bg-white/[0.1] duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#fff"
                  className="w-[14px] h-[14px]"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 308 308"
                  xmlSpace="preserve"
                >
                  <g id="XMLID_468_">
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"
                    />
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"
                    />
                  </g>
                </svg>
              </li>
            </Link>

            <Link href="https://www.linkedin.com/company/govern-x/">
              <li className="bg-white/[0.05] rounded-sm p-2 flex items-center justify-center w-fit hover:bg-white/[0.1] duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#fff"
                  className="w-[14px] h-[14px] text-white"
                  viewBox="0 0 20 20"
                  version="1.1"
                >
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-180.000000, -7479.000000)"
                      fill="#fff"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                          id="linkedin-[#161]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </footer>
    </main>
  );
}
