import React from 'react'
import Block from './Block';

const BlocksSet = () => {
  return (
    <>
      {/* First Block */}

      <Block
        heading="Advanced Natural Language Processing"
        firstLine={[
          "📈 Improved customer interaction",
          "Understand and respond to customer queries in a more human-like manner.",
        ]}
        secondLine={[
          "✅ Faster problem resolution",
          "Quickly identify and address customer issues, reducing resolution time.",
        ]}
        thirdLine={[
          "🌐 Enhanced global reach",
          "Cater to a wider audience by understanding various languages and dialects.",
        ]}
      />
      {/* Second Block */}
      <Block
        heading="Sandboxed ChatGPT and LLMs"
        firstLine={[
          "🚪 Secure environment",
          "Operate chatbots within a controlled space, minimizing security risks.",
        ]}
        secondLine={[
          "🛡️ Data protection",
          "Ensure sensitive information remains within trusted entities.",
        ]}
        thirdLine={[
          "🚀 Rapid deployment",
          "Quickly integrate chatbots. With minimal effort and maximum security.",
        ]}
      />

      {/* Third Block */}
      <Block
        heading="Customized Large Language Models"
        firstLine={[
          "🧠 Enhanced understanding",
          "Better comprehend user queries and provide more accurate responses.",
        ]}
        secondLine={[
          "⚙️ Launch Custom Workflows",
          "Launch customized workflows to automate internal business",
        ]}
        thirdLine={[
          "⛑️ Installs Gaurdrails",
          "Install guardrails to ensure that the chatbot is operating as intended.",
        ]}
      />
      <Block
        heading="Data Security"
        firstLine={[
          "📈 Secure ChatGPT I/O",
          "Make sure what LLMs can and cannot see. Can and cannot do.",
        ]}
        secondLine={[
          "🚫 Access control",
          "Control what actions can ChatGPT launch within your organization.",
        ]}
        thirdLine={[
          "🌐 Enhanced global reach",
          "Cater to a wider audience by understanding various languages and dialects.",
        ]}
      />

      {/* Sixth */}
      <Block
        heading="Omni-channels Chatbot Interface"
        firstLine={[
          "💬 Seamless integration",
          "Easily connect with popular messaging platforms like WhatsApp, Messenger, and more.",
        ]}
        secondLine={[
          "📱 Mobile-friendly",
          "Access chatbots from any device, ensuring a consistent experience across all platforms.",
        ]}
        thirdLine={[
          "🔄 Real-time updates",
          "Synchronize data across channels for up-to-date view of customer interactions.",
        ]}
      />

      {/* Fifth */}
      <Block
        heading="Models, APIs, Tools, and Human-in-loop"
        firstLine={[
          "🌐 State-of-the-art ML Models",
          "Use variety of models to extract insights and conduct more efficient decision making.",
        ]}
        secondLine={[
          "📱 APIs and Tools",
          "LLMs can perform operations and use tools as needed.",
        ]}
        thirdLine={[
          "‍💻 Human-in-loop hand-offs",
          "Some interaction require human interaction, which can shelved for intervention.",
        ]}
      />
    </>
  );
}

export default BlocksSet