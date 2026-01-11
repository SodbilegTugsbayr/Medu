import { BackgroundBeams } from "@/components/ui/background-beams";

export default function AboutPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <BackgroundBeams className="bg-color-foreground dark:bg-color-background fixed z-0 inset-0 object-cover" />
      <div className="z-1 w-full h-full mx-auto flex justify-center items-center gap-4">
        <div className="w-60 h-60 bg-color-foreground/10 backdrop-blur-[2px] flex items-center justify-center rounded-2xl">
          about content
        </div>
      </div>
    </div>
  );
}
