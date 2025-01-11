import { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Appbar from "./Appbar/page";
import { Providers } from "./provider";

export const metadata: Metadata = {
  title: {
    default: "Code for Future - CodeGuide",
    template: "%s | CodeGuide",
  },
  description: 'By SelAshyn',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
