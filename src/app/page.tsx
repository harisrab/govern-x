"use client";

import ExampleSection from "./components/ExampleSection";
import NavBar from "./components/NavBar";
import DeeperLook from "./components/homepage/DeeperLook";
import Footer from "./components/homepage/Footer";
import Healthcare from "./components/homepage/Healthcare";
import HeroSection from "./components/homepage/HeroSection";
import Hydra from "./components/homepage/Hydra";
import KnowledgeBase from "./components/homepage/KnowledgeBase";
import SystemSection from "./components/homepage/SystemSection";
import { ThemeProvider } from "./theme-provider";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="w-full h-screen selection:text-blue-200 selection:bg-blue-600/[0.1] relative bg-[#090909] max-w-[1600px] font-alliance flex flex-col items-center">
        <div className="w-full px-6 sm:px-20">
          <NavBar />
        </div>

        {/* Hero Section Main Page */}
        <HeroSection />

        {/* System Diagram and Product Explaination */}
        <SystemSection />

        {/* Knowledge Base Section */}
        <KnowledgeBase />

        {/* Healthcare Section */}
        <Healthcare />

        {/* Hydra */}
        <Hydra />

        <DeeperLook />

        {/* Feature cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-40 px-6 sm:px-20 ">
        <div className="col-span-3 flex items-center justify-between flex-wrap mb-20">
        <BlocksSet />
        </div>
      </div> */}

        {/* Repeatable section on conversation examples */}

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

        {/* <CustomSoftwareFrame
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
      /> */}

        <Footer />
      </main>
    </ThemeProvider>
  );
}
