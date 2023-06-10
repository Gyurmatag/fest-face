import "./globals.css";
import { Roboto } from "next/font/google";
import Logo from "@/Logo";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Fest Face",
  description: "Pop in for a quick makeover before your favorite artist",
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body
        className={`m-auto ${roboto.variable} bg-gray-200 dark:bg-gray-800`}
      >
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-10 text-white md:px-0">
          <div className="mx-auto lg:w-3/5">
            <nav className="flex justify-between text-center">
              <Link href={"/"}>
                <Logo width={50} height={50} />
              </Link>
              <Link
                className="flex items-center text-lg transition duration-300 ease-in-out hover:text-pink-100"
                href={"/faq"}
              >
                FAQ
              </Link>
            </nav>
            <div className="flex min-h-screen flex-col items-center justify-center space-y-16 px-4 py-10 text-white md:px-0">
              {children}
            </div>
          </div>
          <footer className="mt-auto">
            <div className="border-t border-white/20 py-4">
              <p className="text-center text-white/50">
                © 2023 Fest Face. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
