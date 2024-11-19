import { Metadata } from "next";
import "../styles/globals.css";

// SEO metadata
const title = "Alo Doctor | Kết hợp du lịch và dịch vụ y tế cao cấp tại Việt Nam";
const description =
  "Alo Doctor giúp đặt lịch khám bệnh đơn giản, tiết kiệm và sử dụng các thiết bị y tế hiện đại để chăm sóc sức khỏe hiệu quả.";
const ogimage =
  "https://firebasestorage.googleapis.com/v0/b/digifybiz-899f5.appspot.com/o/OGimage.jpg?alt=media&token=930605e0-d8d6-4f3e-9675-40c3efd1c6b9";
const sitename = "alodoctor.com.au";

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://www.alodoctor.com.au"),
  title,
  description,
  icons: {
    icon: "/VHLogoSquare.png",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://www.alodoctor.com.au",
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
      {/* Add meta tags for robots */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Alo Doctor Team" />
        <link rel="canonical" href="https://www.alodoctor.com.au" />
      </head>
      <body className="bg-[#17181C] text-white">
        {children}
      </body>
    </html>
  );
}
