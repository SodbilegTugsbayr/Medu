import CustomButton from "@/components/shared/custom-button";
import CustomInput from "@/components/shared/custom-input";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center">
      <h1 className="text-2xl font-bold absolute top-12 mx-auto">
        Нууц үг сэргээх
      </h1>
      <div className="flex flex-col gap-6">
        {/* <CustomInput
          type="text"
          placeholder="Утасны дугаар"
          autoComplete="off"
          extraClassName="h-10"
        />
        <CustomInput
          type="password"
          placeholder="Нууц код"
          autoComplete="off"
          extraClassName="h-10"
        /> */}
        <CustomInput
          type="password"
          placeholder="Шинэ нууц үг"
          autoComplete="off"
          extraClassName="h-10"
          maxLength={12}
        />
        <CustomInput
          type="password"
          placeholder="Шинэ нууц үг давтах"
          autoComplete="off"
          extraClassName="h-10"
          maxLength={12}
        />
        <CustomButton children="Сэргээх" extraClassName="h-10" />
      </div>
      <div className="flex items-center justify-center absolute bottom-12 mx-auto">
        <div className="flex justify-between items-center gap-8">
          <Link href="/signup">Бүртгүүлэх</Link>|
          <Link href="/signin">Нэвтрэх</Link>
        </div>
      </div>
    </div>
  );
}
