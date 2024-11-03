import { Metadata } from "next";
import "../styles/globals.css";

let title = "Alo Doctor | Về thăm quê hương kết hợp sử dụng các dịch vụ y tế cao cấp tại Việt Nam | Khám bệnh đơn giản và hiệu quả ";
let description = "Alo Doctor giúp booking đơn giản, tiết kiệm và khách hàng sẽ được sử dụng những trang thiết bị hiện đại nhất bây giờ để chăm sóc sức khoẻ cho bản thân mình";
let ogimage = "https://firebasestorage.googleapis.com/v0/b/digifybiz-899f5.appspot.com/o/OGimage.jpg?alt=media&token=930605e0-d8d6-4f3e-9675-40c3efd1c6b9";
let sitename = "alodoctor.com.au";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alodoctor.com.au'),
  title,
  description,
  icons: {
    icon: "/VHLogoSquare.png",
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
      </body>
    </html>
  );
}
