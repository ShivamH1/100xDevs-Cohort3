import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 border-2 p-4">Navbar</div>
        <aside className="fixed top-14 left-0 bottom-0 border-2 p-4 w-64">
          Sidebar
        </aside>
        <main className="ml-64">{children}</main>
        <div className="fixed bottom-0 left-0 right-0 border-2 p-4">Footer</div>
      </body>
    </html>
  );
}
