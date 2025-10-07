import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Menu from "@/components/Menu.tsx";
import HMenu from "@/components/HMenu";
import { euclidFont } from '@/lib/fonts'
import { cn } from "@/lib/utils";


// const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn(euclidFont.className, 'bg-slate-50')}>
        <div className="min-h-screen flex-1 w-full flex flex-col justify-stretch">
          {/* <HMenu /> */}
          <div className="flex-1 items-stretch content-between w-full justify-between p-4 text-sm flex flex-col sm:flex-row">
            <div className="p-4 sm:w-[120px] w-full mb-4 sm:mb-0">
              <Menu></Menu>
            </div>

            <div className='flex-1 p-4 mx-auto w-full max-content'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
