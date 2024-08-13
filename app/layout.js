import { Inter } from "next/font/google";
import "../styles/main.scss";
import "../styles/globals.css";
import Providers from "@/context/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sparkemove",
  description: "Energy back up for your ekectric motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        </body>
    </html>
  );
}
