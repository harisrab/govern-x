import localFont from "next/font/local";
import "./globals.css";

const allianceFont = localFont({
  variable: "--alliance-font",
  src: [
    {
      path: "alliance/AllianceNo2-Black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-BlackItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "alliance/AllianceNo2-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "alliance/AllianceNo2-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});
export const metadata = {
  title:
    "Govern X - Advanced Chatbots for Data-Driven Decision Making",
  description:
    "Govern X specializes in building advanced chatbots that revolutionize data and decision making within states, organizations, companies, and customer interactions.",
  keywords:
    "WhatsApp chatbots, AI, artificial intelligence, decision making, data-driven, customer interaction, internal operations, SaaS, policing, law enforcement, natural language processing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-[#090909] ${allianceFont.variable} `}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="facebook-domain-verification" content="0tzx3xkxtnbatoo3ng5rx3tehyvn3b" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
