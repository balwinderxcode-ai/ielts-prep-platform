import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">IELTS<span className="text-blue-600">Pro</span></h3>
            <p className="mt-2 text-sm text-slate-500 font-medium max-w-sm">
              The modern, production-grade platform for computer-delivered IELTS preparation.
            </p>
          </div>
          <div className="flex space-x-6 text-sm font-semibold text-slate-600">
            <Link href="/reading" className="hover:text-blue-600 transition">Reading</Link>
            <Link href="/writing" className="hover:text-blue-600 transition">Writing</Link>
            <Link href="/listening" className="hover:text-blue-600 transition">Listening</Link>
            <Link href="/speaking" className="hover:text-blue-600 transition">Speaking</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} IELTS Pro Platform. Built for practice.
          </p>
        </div>
      </div>
    </footer>
  );
}