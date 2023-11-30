import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MGWebs",
  description:
    "Web development - specializing in creating customized digital solutions. We offer web design, website development, and website optimization services. Contact us to take your online presence to the next level!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
