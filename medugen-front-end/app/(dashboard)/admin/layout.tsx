import Link from "next/link";

export default function DashboardAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex min-h-0">
      <div className="w-64 shrink-0 overflow-y-auto flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold">sidebarAdmin</h1>
        <div className="flex flex-col items-start justify-start gap-2">
          <Link href="/admin">admin</Link>
          <Link href="/admin/users">users</Link>
        </div>
      </div>
      <div
        className="
          flex-1 overflow-y-auto
          border-t border-l border-[rgba(184,88,137,0.5)] dark:border-[rgba(124,58,237,0.5)]
          rounded-tl-3xl
          shadow-[-10px_-10px_40px_8px_rgba(184,88,137,0.5)] dark:shadow-[-10px_-10px_40px_8px_rgba(124,58,237,0.5)]
        "
      >
        {children}
      </div>
    </div>
  );
}
