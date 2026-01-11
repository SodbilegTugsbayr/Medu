import BackgroundController from "@/components/public/background-controller";

export default function PublicPage() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <BackgroundController />
      <div className="h-full w-full flex flex-col items-center justify-start">
        <div className="h-screen w-screen relative ">
          <div className="absolute rounded-xl top-40 left-40 w-2 h-80 bg-yellow-900"></div>
          <div className="absolute rounded-xl top-100 left-130 w-2 h-80 bg-yellow-900"></div>
          <div className="absolute rounded-xl top-40 left-220 w-2 h-80 bg-yellow-900"></div>
          <div className="absolute rounded-xl top-100 left-310 w-2 h-80 bg-yellow-900"></div>
          <div className="absolute rounded-xl top-40 left-400 w-2 h-80 bg-yellow-900"></div>
        </div>
        <div className="h-screen w-screen relative backdrop-blur-[2px]">
          content gg
        </div>
        <div className="h-screen w-screen relative backdrop-blur-[2px]">
          content
        </div>
      </div>
    </div>
  );
}
