import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "디어푸드엑스 | 식자재의 기준을 바꾸는 식식",
  description:
    "외식업 사장님 중심의 파트너십 기반 B2B 식자재 유통 플랫폼. 최상의 품질을 합리적인 가격으로, 지속 가능하게 공급합니다.",
  keywords: "식식, SIKSIK, 디어푸드엑스, DearFoodX, B2B, 식자재, 유통, 외식업",
  openGraph: {
    title: "디어푸드엑스 | 식자재의 기준을 바꾸는 식식",
    description:
      "외식업 사장님 중심의 파트너십 기반 B2B 식자재 유통 혁신 플랫폼",
    url: "https://dearfoodx.com",
    siteName: "디어푸드엑스",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
