import Link from "next/link";

export default function DashboardMentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex min-h-0">
      <div className="w-64 shrink-0 overflow-y-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">sidebarMentor</h1>
        <div className="flex flex-col items-start justify-start gap-2">
          <Link href="/mentor">mentor</Link>
          <Link href="/mentor/profile">profile</Link>
        </div>
      </div>
      <div
        className="
          flex-1 overflow-y-auto
          border-t border-l border-[#7C3AED]
          rounded-tl-3xl
          dark:border-[#7C3AED] dark:shadow-[-10px_-10px_40px_8px_rgba(124,58,237,0.25)]
        "
      >
        {children}
      </div>
    </div>
  );
}
