import { Package, Smartphone, BarChart3 } from "lucide-react";
import Image from "next/image";

const businesses = [
  {
    icon: Package,
    title: "식자재 유통 플랫폼",
    description:
      "신선식품부터 공산품까지, 외식업에 필요한 모든 식자재를 합리적인 가격에 공급합니다.",
    features: [
      "농산물 경매 및 산지 직매입",
      "신선식품 신선도 관리",
      "공산품 가격 경쟁력",
      "품질 검증 시스템",
    ],
  },
  {
    icon: Smartphone,
    title: "스마트 주문 시스템",
    description:
      "B2B 외식업 맞춤형 발주 시스템으로 효율적인 운영을 지원합니다.",
    features: [
      "원터치 결제 시스템",
      "구매 이력 기반 빠른 재주문",
      "월/분기/반기 원가 관리",
      "부가세 신고 자료 제공",
    ],
  },
  {
    icon: BarChart3,
    title: "데이터 기반 서비스",
    description:
      "공공데이터 연동과 AI 분석으로 투명하고 스마트한 유통을 실현합니다.",
    features: [
      "공공데이터 API 실시간 연동",
      "MD 가격 모니터링 시스템",
      "수요 예측 및 재고 최적화",
      "고객 맞춤 가격 제공",
    ],
  },
];

const roadmap = [
  { phase: "1", period: "2025-2026", label: "서울 집중 공략", color: "bg-primary" },
  { phase: "2", period: "2027", label: "수도권 확장", color: "bg-green" },
  { phase: "3", period: "2028", label: "동남아 진출", color: "bg-[#D2ABB0]" },
];

export default function BusinessSection() {
  return (
    <section id="business" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl">사업소개</h2>
          <p className="text-lg opacity-80">
            식식은 외식업계의 디지털 전환을 선도하는 B2B 식자재 유통
            플랫폼입니다.
          </p>
        </div>

        {/* Core Business */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {businesses.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary hover:shadow-xl transition-all group"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                <b.icon size={40} />
              </div>
              <h3 className="mb-3 font-bold text-lg">{b.title}</h3>
              <p className="opacity-80 mb-6 text-sm">{b.description}</p>
              <ul className="space-y-2">
                {b.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">&#10003;</span>
                    <span className="opacity-70 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-beige rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6 font-bold text-2xl">식식(SIKSIK) 솔루션</h3>
              <div className="space-y-5">
                {[
                  {
                    title: "원가 관리 및 구매 효율",
                    desc: "고객의 과거 구매 패턴 및 메뉴 데이터를 분석하여 최적의 주문량과 주기를 제안합니다.",
                  },
                  {
                    title: "공공데이터 연동 가격 투명성",
                    desc: "농산물 경매시장 API를 직접 연동하여 투명한 공급 가격 정보를 제공합니다.",
                  },
                  {
                    title: "자체 품질관리 & 새벽배송",
                    desc: "자체 물류센터 기반 배송 운영. 오후 9시 마감 → 다음날 오전 10시까지 냉장/냉동 배송 완료.",
                  },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                    <h4 className="mb-2 font-bold text-primary">{s.title}</h4>
                    <p className="opacity-80 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/solution.png"
                  alt="식식 솔루션"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Growth Roadmap */}
        <div className="bg-gradient-to-br from-primary/10 to-green/10 rounded-3xl p-8 lg:p-12">
          <h3 className="mb-8 text-center font-bold text-2xl">성장 로드맵</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {roadmap.map((r, i) => (
              <div key={i} className="text-center">
                <div
                  className={`w-20 h-20 rounded-2xl ${r.color} text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold`}
                >
                  {r.phase}
                </div>
                <p className="font-bold">{r.period}</p>
                <p className="opacity-70 mt-1 text-sm">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
