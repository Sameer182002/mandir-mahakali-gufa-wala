import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets:['devanagari','latin','latin-ext'],
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "मंदिर श्री महाकाली गुफा वाला",
  description: "",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
