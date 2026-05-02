import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "事業紹介" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="bg-dark-bg text-dark-text">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <p className="text-xl font-bold text-white">Erespect株式会社</p>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              地域と企業の未来を、共に創る。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">
              Menu
            </p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-4">
              Contact
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              〒272-0015 千葉県市川市鬼高3-32-21
            </p>
            <p className="mt-2 text-sm text-white/60">
              erespect@outlook.jp
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Erespect株式会社 All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
