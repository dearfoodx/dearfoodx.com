import Image from "next/image";
import {
  Search,
  ShoppingCart,
  Repeat,
  Truck,
  BarChart,
  DollarSign,
  Zap,
  Award,
  Package2,
  Smartphone,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "상품 검색 및 선택",
    description:
      "5,000개 이상의 식자재 상품을 카테고리별로 쉽게 검색하고 선택할 수 있습니다.",
  },
  {
    icon: ShoppingCart,
    title: "장바구니 담기",
    description:
      "필요한 상품을 장바구니에 담고 한 번에 주문할 수 있습니다.",
  },
  {
    icon: Repeat,
    title: "원터치 결제",
    description:
      "등록된 카드로 1초 만에 빠르고 안전하게 결제할 수 있습니다.",
  },
  {
    icon: Truck,
    title: "빠르고 안전한 배송",
    description:
      "오후 9시 마감 → 다음날 오전 10시까지 냉장/냉동 온도 관리 배송.",
  },
  {
    icon: BarChart,
    title: "구매 데이터 분석",
    description:
      "월/분기/반기 단위 구매 이력을 제공하여 원가 관리와 부가세 신고를 지원합니다.",
  },
];

const highlights = [
  {
    icon: DollarSign,
    title: "가격",
    desc: "매일 공공데이터 API 연동을 통한 투명한 가격 정보 제공",
    points: [
      "농산물 당일 경매시장 직접 API 연동",
      "다수의 공급사와 협력하여 가격 경쟁력 확보",
    ],
  },
  {
    icon: Zap,
    title: "편의성",
    desc: "자주 주문하는 상품은 최근 구매로 저장되어 빠르게 주문",
    points: [
      "원터치 결제로 1초만에 결제",
      "기간별 거래 내역 및 세금계산서 발행",
    ],
  },
  {
    icon: Truck,
    title: "배송",
    desc: "일 합계 7만원 이상 구매 시 매장까지 무료 배송",
    points: [
      "오후 9시 마감 → 다음날 오전 10시까지 배송",
      "자체 물류센터 기반 직접 배송 시스템",
    ],
  },
  {
    icon: Award,
    title: "특별가격",
    desc: "프랜차이즈, VIP 고객 맞춤 가격 제공",
    points: [
      "고객별 할인율 제공으로 충성도 향상",
      "대량 구매 시 추가 혜택 제공",
    ],
  },
];

const appScreens = [
  { src: "/images/app-splash.png", label: "앱 시작 화면" },
  { src: "/images/app-product.png", label: "상품 검색 및 주문" },
  { src: "/images/app-home.png", label: "홈 화면 및 추천" },
  { src: "/images/app-payment.png", label: "결제 내역 / 신고 자료" },
  { src: "/images/app-mypage.png", label: "마이식식" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/images/logo-siksik.png"
            alt="식식 로고"
            width={160}
            height={80}
            className="h-20 w-auto mx-auto mb-6"
          />
          <h2 className="mb-4 font-bold text-3xl">서비스소개</h2>
          <p className="text-lg opacity-80">
            식식의 간편하고 스마트한 식자재 주문 프로세스를 경험하세요.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-center mb-10 font-bold text-xl">
            서비스 이용 프로세스
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary-light text-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  <s.icon size={28} />
                </div>
                <div className="w-8 h-8 rounded-lg bg-gray-100 text-sm font-bold flex items-center justify-center mx-auto mb-2">
                  {i + 1}
                </div>
                <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                <p className="opacity-70 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="bg-beige rounded-3xl p-8 lg:p-12 mb-20">
          <h3 className="text-center mb-10 font-bold text-xl">
            식식만의 차별점
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0 text-primary">
                    <h.icon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold">{h.title}</h4>
                    <p className="opacity-70 text-sm mt-1">{h.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-18">
                  {h.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 text-sm">&#8226;</span>
                      <span className="opacity-80 text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Screenshots */}
        <div>
          <div className="flex items-center gap-2 justify-center mb-10">
            <Smartphone size={28} className="text-primary" />
            <h3 className="font-bold text-xl">식식 앱 화면</h3>
          </div>
          <p className="text-center text-lg opacity-80 mb-10">
            직관적이고 편리한 모바일 앱으로 언제 어디서나 주문하세요
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {appScreens.map((s, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative mb-4 w-full">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-green/15 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white rounded-2xl p-3 shadow-lg border border-gray-100 overflow-hidden">
                    <div className="aspect-[9/19.5] w-full">
                      <Image
                        src={s.src}
                        alt={s.label}
                        width={180}
                        height={390}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-bold text-sm text-center">{s.label}</p>
              </div>
            ))}
          </div>

          {/* App Download */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/kr/app/id6754150660"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-black text-white font-bold hover:bg-gray-800 transition-all"
              >
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.siksik.siksik_flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all"
              >
                Google Play
              </a>
              <a
                href="https://siksik.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-primary text-primary font-bold hover:bg-primary-light transition-all"
              >
                식식 바로가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
