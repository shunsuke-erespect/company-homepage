import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Erespect株式会社へのお問い合わせ。メールにてお気軽にご連絡ください。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero header */}
      <section className="hero-bg text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="glow-circle absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#3a9a6e]/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
            Contact
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            お問い合わせ
          </h1>
        </div>
      </section>

      {/* Contact */}
      <section className="py-28 sm:py-36">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center animate-on-scroll">
            <p className="text-sm text-gray-500 leading-relaxed">
              事業に関するご相談・ご質問は、
              <br className="sm:hidden" />
              メールにてお気軽にお問い合わせください。
            </p>
          </div>

          <div className="mt-16 max-w-sm mx-auto">
            <div className="animate-on-scroll delay-1 group border border-gray-100 p-10 text-center hover:border-primary/20 hover:shadow-lg transition-all duration-500">
              <p className="text-xs tracking-widest text-gray-400 uppercase">
                E-mail
              </p>
              <h2 className="mt-4 text-lg font-bold">メール</h2>
              <div className="mt-2 w-6 h-px bg-accent mx-auto" />
              <p className="mt-6 text-lg font-bold text-primary">
                erespect@outlook.jp
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="mt-16 animate-on-scroll delay-3 border-t border-gray-100 pt-12">
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Office
            </p>
            <h2 className="mt-4 text-lg font-bold">会社所在地</h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              〒272-0015 千葉県市川市鬼高3-32-21
              <br />
              JR総武線 下総中山駅 徒歩10分
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
