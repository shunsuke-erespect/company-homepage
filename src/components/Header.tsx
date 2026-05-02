"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "会社概要" },
  { href: "/services", label: "事業紹介" },
  { href: "/access", label: "アクセス" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Erespect株式会社 ロゴ"
              width={36}
              height={36}
              className="rounded"
              unoptimized
            />
            <span
              className={`text-sm font-medium tracking-wide transition-colors duration-500 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Erespect株式会社
            </span>
          </Link>

          {/* PC menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-500 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 after:bg-gray-900"
                    : "text-white/80 hover:text-white after:bg-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className={`md:hidden p-2 transition-colors duration-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="メニューを開く"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-1 bg-white rounded-xl p-4 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 px-4 text-sm text-gray-700 hover:text-primary hover:bg-section-bg rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
