export default function CustomButton({
  children,
  extraClassName,
  onClick,
}: {
  children: React.ReactNode;
  extraClassName?: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex justify-center items-center gap-12 h-full ${extraClassName}`}
    >
      <div className="bg-gradient-to-b from-stone-300/40 to-transparent rounded-[12px]">
        <button
          onClick={onClick}
          className="group p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 dark:from-stone-800/40 dark:to-stone-900/50 shadow-[0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.8)] active:shadow-[0_0px_1px_rgba(0,0,0,0.1)] dark:active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995] cursor-pointer"
        >
          <div className="bg-gradient-to-b from-stone-200/40 to-white/80  dark:from-stone-400/10 dark:to-stone-400/20 rounded-[8px] px-2">
            <div className="flex gap-2 items-center">
              <span className="font-medium">{children}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
