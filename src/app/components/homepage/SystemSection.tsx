import Image from "next/image";
import { useEffect, useState } from "react";

const SystemSection = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedTab((prevTab) => (prevTab + 1) % 6);
    }, 15000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const tabs = [
    {
      title: "Overview",
      details: [
        {
          title: "Deploy ChatGPT to Your Enterprise",
          description:
            "Deploy sandboxed Large Language Models on your channels of communication, which allow for high data security. These can be hosted on Govern X’s platform or your own servers.",
        },
        {
          title: "Select the best models in the market",
          description:
            "AI is growing at unprecedented speed and scale. We provide you the option to swap models, import the latest ones, while remaining compliant in a data-secure environment. ",
        },
      ],
    },
    {
      title: "Base model",
      details: [
        {
          title: "Use commercial, open-source, or homegrown LLMs",
          description:
            "Generative AI is evolving fast and Large Language Models are being released at unprecedented rate. We’re keeping our platform fully updated with a plethora of models for you to choose from.",
        },
        {
          title: "Compare, choose, and deploy",
          description:
            "We give the facility to test different models, compare their outputs, and deploy the base models to your enterprise chat system, all with Govern Corp’s platform.",
        },
      ],
    },
    {
      title: "Fine-tuning",
      details: [
        {
          title: "Make sure ChatGPT adopts your business language",
          description:
            "It’s critical that ChatGPT conducts conversations in highly professional tone, language that is consistent with the brand and style of your company.",
        },
        {
          title: "Optimize Out-of-the-box Language Models",
          description:
            "Out-of-the-box language models perform poorly on custom databases and custom tools. We provide the infrastructure and expertise to fine-tune and deploy them for your enterprise.",
        },
      ],
    },
    {
      title: "Data and tools",
      details: [
        {
          title: "Connect your proprietary business data",
          description:
            "Your data lives on Notion, Google Cloud, AWS, Azure, or Google Drives, we provide the facility for you to add data to Govern Corp’s Long Term Memory System that ensure autonomous agents have  compliant and secure access to your IP.",
        },
        {
          title: "Allow access to plethora of tools",
          description:
            "From initiating automated notifications, emails, and calls to processing documents, images, and video feeds with sophisticated AI models, we provide a whole suite of capabilities to make the chat system access various tools to get the job done in the most critical environment, all the while you remain in the Hydra chat interface.",
        },
      ],
    },
    {
      title: "Security",
      details: [
        {
          title: "Deploy AI Agents to Confidential Networks",
          description:
            "Autonomous AI Agents can be deployed to your Virtual Private Network or hosted on Govern Corp’s secure servers with roles based access controls, ensuring propriety data,  Personal Intellectual Property, and conversation trails to be kept secure.",
        },
        {
          title: "Fine-Tune Your LLM's Actions and Responses",
          description:
            "Leverage Govern Corp's exceptional fine-tuning, RLHF, and prompt engineering solutions to fine-tune Hydra chat systems, guaranteeing factual correctness and strict adherence to your policy and brand tonality standards.",
        },
        {
          title: "Enhance Security with Red-Teaming Expertise",
          description:
            "We have an in-house team of people who are deployed to regulate the actions and decisions taken by these AI agents. This is critical to ensure continuous improvement of these systems, and to monitor bad actors who aim to abuse the system.",
        },
      ],
    },
    {
      title: "Chat",
      details: [
        {
          title: "Dynamic UI",
          description:
            "Complex assets and data requires more than text for detailed interrogation. Hydra is able to generate appropriate UI for appropriate context condensing complexing information into simple structured output.",
        },
        {
          title: "Multiple Communication Frontends",
          description:
            "We provide interfaces for different people tailored to their different needs. Patients can use WhatsApp, WeChat for customer interaction, while operators can use Hydra for more sophisticated interactions.",
        },
      ],
    },
  ];

  return (
    <div className="w-full  px-10 sm:px-20 my-20">
      <span className="uppercase tracking-[3px] text-[12px] font-light  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        Govern Corp&apos;s AI Operations Platform
      </span>
      <h1 className="w-full max-w-[500px] mt-2 font-semibold text-[20px] sm:text-[25px]  lg:text-[30px] text-transparent bg-clip-text bg-gradient-to-br from-[#006BFF] to-blue-300">
        Build and Deploy Generative AI Agents for Your Enterprise Ops
      </h1>

      <ul className="flex my-10 gap-8 items-center text-[14px] flex-wrap">
        {tabs.map(({ title }, index) => (
          <button key={index} onClick={() => setSelectedTab(index)}>
            <li
              className={` px-5 py-1 rounded-full duration-150 ${
                selectedTab === index
                  ? "bg-white/[0.1]"
                  : "bg-white/[0.0] opacity-40 hover:opacity-[0.7]"
              }`}
              onClick={() => setSelectedTab(0)}
            >
              {title}
            </li>
          </button>
        ))}
      </ul>

      <div className="flex items-center justify-between gap-20 flex-col lg:flex-row">
        {/* Info side */}
        <ul className="flex flex-col lg:min-h-[600px] lg:justify-center">
          {tabs[selectedTab]["details"]?.map(
            ({ title, description }, index) => (
              <li
                key={index}
                className="border-b-[1px] border-b-white/[0.1] py-10 last:border-b-white/[0.0] last:border-b-[1px]"
              >
                <h1 className="font-light text-[18px]">{title}</h1>
                <p className="text-white/[0.6] max-w-[500px] text-[14px] mt-2">
                  {description}
                </p>
              </li>
            )
          )}
        </ul>

        {/* Holder for the dynamic image */}
        <div className="w-full h-[200px] lg:h-[500px] max-w-3xl relative">
          {/* Base Models */}
          <Image
            className={`${
              selectedTab === 0 || selectedTab === 1
                ? "opacity-100"
                : "opacity-30"
            } duration-150`}
            src={"/system_stack/baseModels_l1.png"}
            alt="l1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />

          {/* Fine Tuning */}
          <Image
            className={`${
              selectedTab === 0 || selectedTab === 2
                ? "opacity-100"
                : "opacity-30"
            } duration-150`}
            src={"/system_stack/fineTuning_l2.png"}
            alt="l1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />

          {/* Data stores */}
          <Image
            className={`${
              selectedTab === 0 || selectedTab === 3
                ? "opacity-100"
                : "opacity-30"
            } duration-150`}
            src={"/system_stack/dataStores_l3.png"}
            alt="l1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />

          {/* Security */}
          <Image
            className={`${
              selectedTab === 0 || selectedTab === 4
                ? "opacity-100"
                : "opacity-30"
            } duration-150`}
            src={"/system_stack/security_l4.png"}
            alt="l1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />

          {/* Chat */}
          <Image
            className={`${
              selectedTab === 0 || selectedTab === 5
                ? "opacity-100"
                : "opacity-30"
            } duration-150`}
            src={"/system_stack/chat_l5.png"}
            alt="l1"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SystemSection;
