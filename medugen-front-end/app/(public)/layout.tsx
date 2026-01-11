import { PublicFooter, PublicHeader } from "@/components/public";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex flex-col text-black dark:text-white">
      <PublicHeader />
      <div className="flex-1 mx-auto">{children}</div>
      <PublicFooter />
    </div>
  );
}
