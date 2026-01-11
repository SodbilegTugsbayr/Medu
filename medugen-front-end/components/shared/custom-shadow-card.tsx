export default function CustomShadowCard({
  children,
  extraClassName,
}: {
  children: React.ReactNode;
  extraClassName?: string;
}) {
  return (
    <div
      className={`flex justify-center items-center rounded-[50px] bg-[#e0e0e0] dark:bg-[var(--color-background)] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[15px_15px_60px_#444444,-15px_-15px_60px_#828282] ${extraClassName}`}
    >
      {children}
    </div>
  );
}
