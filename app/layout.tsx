import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Alo Doctor | Book your doctor appointment now from Australia and get treatment in Vietnam | Đặt lịch tài Úc | Khám chữa bệnh tại Việt Nam ";
let description = "Alo Doctor giúp booking đơn giản, tiết kiệm và khách hàng sẽ được sử dụng những trang thiết bị hiện đại nhất bây giờ để chăm sóc sức khoẻ cho bản thân mình";
let ogimage = "https://firebasestorage.googleapis.com/v0/b/digifybiz-899f5.appspot.com/o/OGimage.jpg?alt=media&token=930605e0-d8d6-4f3e-9675-40c3efd1c6b9";
let sitename = "alodoctor.com.au";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alodoctor.com.au'),
  title,
  description,
  icons: {
    icon: "/digify-favicon.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://alodoctor.com.au",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
