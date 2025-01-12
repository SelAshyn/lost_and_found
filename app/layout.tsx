import { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Appbar from "./Appbar/page"; 
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: {
    default: "Lost && Found",
    template: "%s | SXC",
  },
  description: 'By ALCC',
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/sxc.png" sizes="any" />
      </head>
      <body>
          <Providers>
          <Appbar />
          {children}
          </Providers>
      </body>
    </html>
  );
}
