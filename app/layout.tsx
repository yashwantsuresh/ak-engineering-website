import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AK Engineering | Conveyors, Automation & Special Purpose Machines",
  description: "Industrial conveyor systems, modular belts, slat chains, components and custom automation engineered in Coimbatore.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
