"use client";
import { loginSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    try {
      console.log("Login submitted:", data);

      setCookie("token", data.password);
      router.push('/')
      // Add your login API call here
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex flex-col h-[calc(100%-4rem)]">
      <div className="flex-1 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col"
        >
          <div className="space-y-6">
            <CustomInput
              {...register("email")}
              name="email"
              label="Email"
              type="email"
              required={true}
              placeholder="Enter your email"
              error={errors.email?.message}
            />
            <CustomInput
              {...register("password")}
              name="password"
              label="Password"
              type="password"
              required={true}
              placeholder="Enter your password"
              error={errors.password?.message}
            />
          </div>
          <div className="flex justify-between items-center mt-0 lg:mt-[21%] mb-2">
            <p className="text-lg font-normal text-black hover:text-gray-700">
              Forgot Password?
            </p>
            <CustomButton type="submit" text={"Log In"}   />
          </div>
        </form>
      </div>

      <div className="grid grid-cols-2 h-14 border-t border-gray-400">
        <button className="flex items-center justify-center">
          {" "}
          <Image
            src="/icons/google.svg"
            alt="google_logo"
            width={24}
            height={24}
          />
        </button>
        <button className="flex items-center justify-center border-l border-gray-400">
          <Image
            src="/icons/facebook.svg"
            alt="faceboook_logo"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default Login;
