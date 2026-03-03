import { Target, Award, Calendar } from "lucide-react";

const philosophy = [
  {
    icon: "識",
    title: "아는 힘",
    description:
      "데이터를 읽고 분석하여 신선도와 품질, 가격을 정확하게 예측 판별합니다",
  },
  {
    icon: "式",
    title: "기준과 방식",
    description:
      "유통과 선별의 새로운 표준을 세우고, 일관된 품질을 보장합니다",
  },
  {
    icon: "食",
    title: "먹을 식",
    description:
      "먹거리의 본질에 충실하며, 건강하고 안전한 식자재를 제공합니다",
  },
];

const timeline = [
  { year: "2025년 6월", event: "주식회사 디어푸드엑스 설립" },
  { year: "2025년 6~10월", event: "웹/앱 서비스 기획 및 개발 완료" },
  { year: "2025년 11~12월", event: "식식 플랫폼 서비스 운영 시작" },
  { year: "2026년", event: "서울 단일 권역 안정화 및 지배력 강화" },
  { year: "2027년", event: "수도권 스케일 업, 타깃 확대" },
  { year: "2028년", event: "플랫폼 확장 및 동남아시아 진출" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl">회사소개</h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            디어푸드엑스는 외식업과 데이터의 접점에서 전문성에 기반한
            강력한 실행력으로 식자재 유통을 혁신합니다.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center mb-6 text-primary">
              <Target size={32} />
            </div>
            <h3 className="mb-4 font-bold text-2xl">비전</h3>
            <p className="opacity-80 leading-relaxed">
              외식업 사장님 중심의 파트너십 기반 B2B 유통 혁신 플랫폼입니다.
              최상의 품질을 합리적인 가격으로, 그리고 지속 가능하게 공급함으로써
              외식업 사장님들의 안정적인 경영을 돕는 동반자가 됩니다.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-primary-light flex items-center justify-center mb-6 text-primary">
              <Award size={32} />
            </div>
            <h3 className="mb-4 font-bold text-2xl">미션</h3>
            <p className="opacity-80 leading-relaxed">
              최상의 품질을 합리적인 가격으로, 그리고 지속 가능하게 공급하는 것이
              우리의 미션이며 목표입니다. 식자재의 기준을 바꾸는 식식입니다.
            </p>
          </div>
        </div>

        {/* Brand Philosophy */}
        <div className="bg-beige rounded-3xl p-8 lg:p-12 mb-20">
          <h3 className="text-center mb-12 font-bold text-2xl">
            브랜드 철학: 識 · 式 · 食
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  {item.icon}
                </div>
                <h4 className="mb-3 font-bold text-lg">{item.title}</h4>
                <p className="opacity-70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Calendar size={28} className="text-primary" />
            <h3 className="font-bold text-2xl">기업 연혁</h3>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100">
                    <p className="font-bold text-primary">{item.year}</p>
                    <p className="mt-1 opacity-80">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
