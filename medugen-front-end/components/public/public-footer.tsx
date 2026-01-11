import Link from "next/link";

export default function PublicFooter() {
  return (
    <div className="fixed bottom-0 backdrop-blur-[2px] bg-white/5 z-50 py-6 px-10 w-full flex justify-between items-center">
      <p>© 2025 Medugen. All rights reserved.</p>
      <div className="flex gap-2">
        <Link href="/admin">admin</Link>
        <Link href="/client">client</Link>
        <Link href="/mentor">mentor</Link>
        <Link href="/conversation">conversation</Link>
        <Link href="/signin">signin</Link>
        <Link href="/signup">signup</Link>
        <Link href="/register">register</Link>
        <Link href="/forgot-password">forgot-password</Link>
      </div>
    </div>
  );
}
