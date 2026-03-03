"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import KakaoMap from "./KakaoMap";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "본사 주소",
    content: "경기도 김포시 양도로 9\n나린플레이스 4층 404호",
  },
  {
    icon: Phone,
    title: "고객센터",
    content: "1833-5123\n평일 09:00 ~ 18:00 (주말/공휴일 휴무)",
  },
  {
    icon: Mail,
    title: "이메일",
    content: "help@dearfoodx.com",
  },
];

const faqs = [
  {
    q: "최소 주문 금액이 있나요?",
    a: "일 합계 7만원 이상 구매 시 무료 배송이며, 7만원 미만은 배송비가 부과됩니다.",
  },
  {
    q: "배송은 언제 받을 수 있나요?",
    a: "오후 9시까지 주문하시면 다음날 오전 10시까지 매장으로 배송해 드립니다.",
  },
  {
    q: "결제 방법은 어떤 것들이 있나요?",
    a: "신용카드, 무통장 입금을 지원하며, 자주 사용하는 카드를 등록하여 원터치 결제도 가능합니다.",
  },
  {
    q: "회원 가입은 어떻게 하나요?",
    a: "고객센터(1833-5123)로 문의하시거나 help@dearfoodx.com으로 이메일을 보내주시면 안내해 드립니다.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-3xl">문의하기</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
            식식 서비스에 대해 궁금하신 점이 있으시면 언제든지 문의해
            주세요.
            <br />
            빠르게 답변 드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <h3 className="mb-6 font-bold text-xl">문의 양식</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-1.5">
                  이름 *
                </label>
                <input
                  id="name"
                  required
                  placeholder="이름을 입력하세요"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-1.5">
                  이메일 *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold mb-1.5">
                  연락처
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold mb-1.5">
                  업체명
                </label>
                <input
                  id="company"
                  placeholder="업체명을 입력하세요"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-1.5">
                  문의 내용 *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="문의하실 내용을 자세히 입력해 주세요"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 disabled:opacity-60 transition-all"
              >
                {status === "sending" ? "전송 중..." : "문의하기"}
              </button>

              {status === "success" && (
                <p className="text-green text-center font-bold">
                  문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold">
                  전송에 실패했습니다. 이메일(help@dearfoodx.com)로 직접 문의해
                  주세요.
                </p>
              )}
            </form>
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-3 text-primary">
                    <info.icon size={20} />
                  </div>
                  <p className="text-xs opacity-60 mb-1">{info.title}</p>
                  <p className="font-bold text-sm whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <KakaoMap lat={37.6066746} lng={126.7239608} title="디어푸드엑스 본사" />
              <div className="p-4 text-center">
                <p className="font-bold text-sm">본사</p>
                <p className="opacity-70 text-sm">
                  경기도 김포시 양도로 9 나린플레이스 4층 404호
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <KakaoMap lat={37.7239965} lng={126.8170758} title="일산 물류센터" />
              <div className="p-4 text-center">
                <p className="font-bold text-sm">물류센터</p>
                <p className="opacity-70 text-sm">
                  경기도 고양시 일산동구 설문동 340-4 2층
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center mb-8 font-bold text-xl">
            자주 묻는 질문
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h4 className="mb-2 font-bold text-primary">Q. {faq.q}</h4>
                <p className="opacity-80">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
