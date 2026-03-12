"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Reading", href: "/reading" },
    { name: "Writing", href: "/writing" },
    { name: "Listening", href: "/listening" },
    { name: "Speaking", href: "/speaking" },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="font-extrabold text-xl text-slate-900 tracking-tight">IELTS<span className="text-blue-600">Pro</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}