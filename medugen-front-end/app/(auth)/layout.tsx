import CustomShadowCard from "@/components/shared/custom-shadow-card";
import HomeButton from "@/components/shared/home-button";
import PageTransition from "@/components/shared/page-transition";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <HomeButton />
      <div className="absolute top-10 right-10">
        <ThemeToggle />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <CustomShadowCard extraClassName="w-100 h-120 flex items-center justify-center">
          <PageTransition>{children}</PageTransition>
        </CustomShadowCard>
      </div>
      <p className="absolute bottom-10 text-sm text-color-foreground">
        &copy; MeduGen LLC. 2026 All rights reserved.
      </p>
    </div>
  );
}
