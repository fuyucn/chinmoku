import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "chinmoku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex-1 items-stretch content-between w-full justify-between p-4 text-sm flex flex-col sm:flex-row">

          <div className="p-4 sm:w-[120px] w-full mb-4 sm:mb-0">
            <Menu></Menu>
          </div>

          <div className='flex-1 p-4 max-w-6xl mx-auto w-full'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
