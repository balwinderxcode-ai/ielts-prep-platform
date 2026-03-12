import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-blue-200 transition">
              IELTS Master
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/reading" className="hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition">Reading</Link>
            <Link href="/writing" className="hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition">Writing</Link>
            <Link href="/listening" className="hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition">Listening</Link>
            <Link href="/speaking" className="hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium transition">Speaking</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}