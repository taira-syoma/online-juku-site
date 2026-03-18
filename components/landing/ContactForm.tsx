"use client";
import { useState } from "react";
import { sendEmail } from "@/app/actions";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<any>({}); 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false); // 送信中状態を追加

  async function handleFormSubmit(formData: FormData) {
    setIsPending(true); // 送信開始
    setStatus(""); 
    setErrors({}); 

    const result = await sendEmail(formData);
    setIsPending(false); // 送信終了

    if (result.success) {
      setIsSubmitted(true); // ✅ ここで画面を切り替えるスイッチをON
      setStatus("無事に送信されました！");
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if (form) form.reset();
    } else {
      // エラー処理
      if (result.errors) {
        setErrors(result.errors);
      } else {
        setStatus(result.message || "送信に失敗しました。内容を確認してください。");
      }
    }
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-blue-50 text-blue-900">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSubmitted ? "送信完了" : "お問い合わせフォーム"}
      </h2>
      
      {/* ✅ 送信に成功したかどうかで表示を丸ごと切り替える */}
      {isSubmitted ? (
        <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in duration-500">
          <div className="text-6xl">✅</div>
          <h3 className="text-xl font-bold">無事に送信されました！</h3>
          <p className="text-gray-600 leading-relaxed">
            お問い合わせいただきありがとうございます。<br />
            24時間以内に現役医学生の代表講師より、<br />
            ご入力いただいたメールアドレスへお返事いたします。
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-sm text-blue-600 hover:underline mt-6"
          >
            新しく別のお問い合わせを送る
          </button>
        </div>
      ) : (
        <form id="contact-form" action={handleFormSubmit} className="space-y-5">
          {/* お名前 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">お名前</label>
            <input 
              name="name" 
              type="text" 
              placeholder="佐藤 太郎"
              disabled={isPending}
              className={`w-full border rounded-lg p-3 outline-none transition ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.name[0]}</p>}
          </div>
          
          {/* メールアドレス */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">メールアドレス</label>
            <input 
              name="email" 
              type="text" 
              placeholder="example@goukaku.com"
              disabled={isPending}
              className={`w-full border rounded-lg p-3 outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.email[0]}</p>}
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">お問い合わせ内容（10文字以上）</label>
            <textarea 
              name="message" 
              placeholder="ご相談内容を入力してください"
              disabled={isPending}
              className={`w-full border rounded-lg p-3 h-40 outline-none transition ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500'}`} 
            />
            {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">⚠️ {errors.message[0]}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg transform hover:-translate-y-0.5 disabled:bg-gray-400 disabled:transform-none"
          >
            {isPending ? "送信中..." : "内容を確認して送信する"}
          </button>

          {/* エラー時のみ表示されるメッセージ（バリデーション失敗時など） */}
          {status && !isSubmitted && (
            <div className="mt-4 p-3 rounded-lg text-center font-bold bg-red-100 text-red-700">
              {status}
            </div>
          )}
        </form>
      )}
    </div>
  );
}