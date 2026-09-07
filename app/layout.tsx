import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: "anyTHINK Media & Events | What's Next",
  description:
    "A creative media and experiences company turning what if into what's next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="chalkboard min-h-screen overflow-x-hidden ">
          <Header navItems={navItems} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
