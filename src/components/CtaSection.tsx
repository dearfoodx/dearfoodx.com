export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4 font-bold text-3xl">
          지금 바로 &ldquo;식식&rdquo;을 시작하세요.
        </h2>
        <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
          최상의 품질을 합리적인 가격으로, 그리고 지속 가능하게 공급함으로써
          <br />
          외식업 사장님들의 안정적인 경영을 돕는 동반자가 됩니다
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-primary font-bold text-lg hover:bg-white/90 transition-all"
          >
            문의하기
          </a>
          <a
            href="https://siksik.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all"
          >
            식식 바로가기
          </a>
        </div>
        <p className="mt-12 opacity-70 text-sm">
          식식(SIKSIK) | B2B 식자재 문의: help@dearfoodx.com
        </p>
      </div>
    </section>
  );
}
