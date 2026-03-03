import { NextResponse } from "next/server";

const TOAST_EMAIL_DOMAIN = process.env.TOAST_EMAIL_API_DOMAIN;
const TOAST_EMAIL_APP_KEY = process.env.TOAST_EMAIL_APP_KEY;
const TOAST_EMAIL_SECRET_KEY = process.env.TOAST_EMAIL_SECRET_KEY;

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "필수 항목을 입력해 주세요." },
        { status: 400 },
      );
    }

    const res = await fetch(
      `${TOAST_EMAIL_DOMAIN}/email/v2.0/appKeys/${TOAST_EMAIL_APP_KEY}/sender/mail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "X-Secret-Key": TOAST_EMAIL_SECRET_KEY!,
        },
        body: JSON.stringify({
          senderAddress: "developer@dearfoodx.com",
          senderName: "디어푸드엑스 홈페이지",
          title: `[홈페이지 문의] ${name}${company ? ` - ${company}` : ""}`,
          body: `
            <h2>홈페이지 문의가 접수되었습니다</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:100px;">이름</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">연락처</td><td style="padding:8px;border:1px solid #ddd;">${phone || "-"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">업체명</td><td style="padding:8px;border:1px solid #ddd;">${company || "-"}</td></tr>
              <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;vertical-align:top;">문의내용</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${message}</td></tr>
            </table>
          `,
          receiverList: [
            {
              receiveMailAddr: "help@dearfoodx.com",
              receiveName: "디어푸드엑스",
              receiveType: "MRT0",
            },
          ],
        }),
      },
    );

    const body = await res.json();

    if (res.ok && body.header?.isSuccessful) {
      return NextResponse.json({ success: true });
    }

    console.error("Toast Email API error:", body);
    return NextResponse.json(
      { error: "메일 전송에 실패했습니다." },
      { status: 500 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "메일 전송에 실패했습니다." },
      { status: 500 },
    );
  }
}
