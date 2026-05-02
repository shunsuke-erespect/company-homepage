import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アクセス",
  description:
    "Erespect株式会社へのアクセス情報。千葉県市川市鬼高3-32-21、JR総武線 下総中山駅 徒歩10分。",
};

export default function AccessPage() {
  return (
    <>
      {/* Hero header */}
      <section className="hero-bg text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="glow-circle absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#3a9a6e]/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase">
            Access
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">アクセス</h1>
        </div>
      </section>

      {/* Access info */}
      <section className="py-28 sm:py-36">
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div className="animate-on-scroll">
              <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase">
                Location
              </p>
              <h2 className="mt-4 text-2xl font-bold">所在地情報</h2>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    Address
                  </p>
                  <p className="mt-2 text-gray-800 leading-relaxed">
                    〒272-0015
                    <br />
                    千葉県市川市鬼高3-32-21
                  </p>
                </div>

                <div className="w-12 h-px bg-gray-200" />

                <div>
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    Access
                  </p>
                  <p className="mt-2 text-gray-800">
                    JR総武線 下総中山駅 徒歩10分
                  </p>
                </div>

                <div className="w-12 h-px bg-gray-200" />

                <div>
                  <p className="text-xs tracking-widest text-gray-400 uppercase">
                    E-mail
                  </p>
                  <p className="mt-2 text-gray-800">
                    erespect@outlook.jp
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-on-scroll delay-2">
              <div className="aspect-square lg:aspect-[4/5] w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.93!3d35.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5Y2D6JGJ55yM5biC5bed5biC6ay86auYMy0zMi0yMQ!5e0!3m2!1sja!2sjp!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Erespect株式会社の所在地"
                />
              </div>
              <p className="mt-4 text-xs text-gray-400">
                ※ 地図が正しく表示されない場合は、Google
                Mapsで「千葉県市川市鬼高3-32-21」を検索してください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
