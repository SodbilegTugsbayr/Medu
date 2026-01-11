import ThemeToggle from "@/components/shared/theme-toggle";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-3 rounded-2xl shrink-0">
        <div className="flex items-center justify-start gap-2">
          <h1 className="text-2xl font-bold">dashboard header</h1>
          <div className="flex items-center justify-start gap-2">
            <Link href="/">home</Link>
            <Link href="/admin">admin</Link>
            <Link href="/client">client</Link>
            <Link href="/mentor">mentor</Link>
            <Link href="/conversation">conversation</Link>
            <Link href="/signin">sign in</Link>
            <Link href="/signup">sign up</Link>
            <Link href="/register">register</Link>
            <div className="flex gap-2 items-center w-40 h-10">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
