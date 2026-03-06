import Image from "next/image";

const navItems = [
  { id: "about", label: "회사소개" },
  { id: "business", label: "사업소개" },
  { id: "services", label: "서비스소개" },
  { id: "contact", label: "문의하기" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <Image
              src="/images/logo-dearfoodx.png"
              alt="디어푸드엑스"
              width={160}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
            <div className="space-y-1.5 opacity-80 text-sm">
              <p>주식회사 디어푸드엑스(DearFood-X Inc.)</p>
              <p>대표자: 조석환</p>
              <p>사업자등록번호: 267-81-03967</p>
              <p>주소: 경기도 김포시 양도로 9 나린플레이스 4층 417호</p>
              <p className="pt-4">&copy; 2025 DearFood-X Inc. All rights reserved.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 font-bold">바로가기</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold">고객센터</h4>
              <div className="space-y-1.5 opacity-80 text-sm">
                <p>1833-5153</p>
                <p>운영시간: 평일 09:00 - 18:00</p>
                <p>(주말 및 공휴일 휴무)</p>
                <p>이메일: help@dearfoodx.com</p>
                <p className="pt-4">
                  <a
                    href="https://siksik.co.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    www.siksik.co.kr
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
