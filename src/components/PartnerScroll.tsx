import Image from "next/image";

const partners = [
  { name: "CJ 프레시웨이", desc: "식자재 상품 공급", logo: "/images/partner-cj.png" },
  { name: "비앤비코리아", desc: "식용유 도매 공급", logo: "/images/partner-bnb.png" },
  { name: "사조대림", desc: "식자재 상품 공급", logo: "/images/partner-sajo.png" },
  { name: "주현농산", desc: "농산물 공급", logo: "/images/partner-juhyeon.png" },
];

export default function PartnerScroll() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-16 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12 text-2xl font-bold">협력사</h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {doubled.map((p, i) => (
              <div key={i} className="flex-shrink-0 mx-4 sm:mx-6" style={{ width: 280 }}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={128}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{p.name}</h3>
                    <p className="opacity-70 mt-1 text-sm">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
