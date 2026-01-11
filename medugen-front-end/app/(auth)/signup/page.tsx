import CustomButton from "@/components/shared/custom-button";
import CustomInput from "@/components/shared/custom-input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <h1 className="text-2xl font-bold absolute top-12 mx-auto">Бүртгүүлэх</h1>
      <div className="flex flex-col gap-8">
        <CustomInput
          type="tel"
          onlynumber={true}
          placeholder="Утасны дугаар"
          autoComplete="off"
          extraClassName="h-10"
          maxLength={8}
        />
        <CustomInput
          type="password"
          placeholder="Нууц үг"
          autoComplete="off"
          extraClassName="h-10"
          maxLength={12}
        />
        <CustomInput
          type="password"
          placeholder="Нууц үг давтах"
          autoComplete="off"
          extraClassName="h-10"
          maxLength={12}
        />
        <CustomButton children="Бүртгүүлэх" extraClassName="h-10" />
      </div>
      <div className="flex items-center justify-center absolute bottom-12 mx-auto">
        <div className="flex justify-between items-center gap-8">
          <Link href="/signin">Нэвтрэх</Link>|
          <Link href="/forgot-password">Нууц үг мартсан</Link>
        </div>
      </div>
    </div>
  );
}
