
import { yekan } from "@/utils/font";
import "./globals.css";

export const metadata = {
  title: "املاک زانا",
  description: "سایت خرید و فروش املاک",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>{children}</body>
    </html>
  );
}
