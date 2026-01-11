import Image from "next/image";
import Link from "next/link";
import PublicHeaderActions from "./public-header-actions";

export default function PublicHeader() {
  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="fixed top-0 z-50 flex justify-center items-center w-full pt-6 pb-2">
      <div className="w-fit flex justify-between items-center gap-6 bg-color-foreground/10 backdrop-blur-[2px] px-5 rounded-xl">
        <div className="flex gap-2 items-center">
          <Image
            src="https://res.cloudinary.com/dsvivujtj/image/upload/v1767686465/Screenshot_2025-12-29_at_19.06.39-removebg-preview_gfpwfe.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl font-bold font-[SF_Pro_Rounded]">Medugen</h1>
        </div>
        <div className="flex gap-6 px-10">
          {items.map((item) => (
            <Link href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <PublicHeaderActions />
      </div>
    </div>
  );
}
