import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Image
                src="/images/logo-dearfoodx.png"
                alt="디어푸드엑스 로고"
                width={240}
                height={80}
                className="h-16 sm:h-20 w-auto"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                식자재의 기준을
                <br />
                바꾸는 <span className="text-primary">식식</span>
              </h1>
              <p className="text-lg sm:text-xl opacity-80 leading-relaxed">
                외식업 사장님 중심의 파트너십 기반 B2B 유통 혁신
                플랫폼입니다.
                <br />
                최상의 품질을 합리적인 가격으로, 그리고 지속 가능하게
                공급합니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all"
              >
                서비스 알아보기
              </a>
              <a
                href="https://siksik.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-primary text-primary font-bold text-lg hover:bg-primary-light transition-all"
              >
                식식 바로가기
              </a>
            </div>
          </div>

          <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/warehouse.png"
                alt="디어푸드엑스 물류센터"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-primary opacity-30 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-green opacity-30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
