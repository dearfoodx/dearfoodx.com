import { TrendingUp, Clock, Shield, ShoppingCart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "투명한 가격 정보",
    description: "매일 공공데이터 API 연동을 통한 투명한 가격 정보를 제공합니다.",
  },
  {
    icon: Clock,
    title: "빠른 주문 시스템",
    description:
      "자주 주문하는 상품을 최근 구매 기록에서 빠르게 재주문할 수 있습니다.",
  },
  {
    icon: Shield,
    title: "품질 보증",
    description:
      "신선식품은 신선도와 안정적 공급을, 공산품은 가격 경쟁력을 보장합니다.",
  },
  {
    icon: ShoppingCart,
    title: "무료 배송",
    description:
      "일 합계 7만원 이상 구매 시 당일 주문 횟수와 상관없이 무료 배송해드립니다.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl">식식만의 차별점</h2>
          <p className="text-lg opacity-80">
            외식업 사장님들의 성공적인 경영을 위한 스마트한 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform text-primary">
                <f.icon size={32} />
              </div>
              <h3 className="mb-3 text-center font-bold">{f.title}</h3>
              <p className="opacity-70 text-center text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
