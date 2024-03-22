import '@radix-ui/themes/styles.css';
import './theme-config.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme, } from "@radix-ui/themes";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "uconquer",
  description: "Online codeing arina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>
          <nav>
            <NavBar></NavBar>
          </nav>
          <main className='p-8'>
            <Container>
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
