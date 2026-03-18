"use server"; // 必須：サーバー側で動かす宣言

import { Resend } from "resend";
import { z } from "zod";

// 1. 入力ルールの定義（Zod）
const ContactSchema = z.object({
  name: z.string().min(2, "お名前は2文字以上で入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "内容は10文字以上で入力してください"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // 2. 入力内容のバリデーション実行
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  // チェックに失敗した場合
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    // 3. 全てOKならメール送信
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "m241549@st.yamagata-u.ac.jp", // あなたの大学アドレス
      subject: `【塾についてのお問い合わせ】${name}様より`,
      text: `名前: ${name}\nメール: ${email}\n内容: ${message}`,
    });
    return { success: true };
  } catch (error) {
    return { success: false, message: "通信エラーが発生しました" };
  }
}