
"use client";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { registerSchema } from "@/schema/auth";
import TermsAndConditions from "./TermsAndConditions";



const Register = ({setActiveTab}) => {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState({});
  const toggle=() => setOpen(!open);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit = async (data) => {
    try {
      // Add your API call here
      toggle()
    
      console.log("Form submitted:", data);
      setPayload(data)
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100%-4rem)]">
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-center">
          <div className="space-y-6">
            <CustomInput
              {...register("name")}
              label="Name"
              type="text"
              required={true}
              placeholder="Enter your name"
              error={errors.name?.message}
            />
            <CustomInput
              {...register("email")}
              label="Email"
              type="email"
              required={true}
              placeholder="Enter your email"
              error={errors.email?.message}
            />
            <CustomInput
              {...register("password")}
              label="Password"
              type="password"
              required={true}
              placeholder="Enter your password"
              error={errors.password?.message}
            />
            <CustomInput
              {...register("confirmPassword")}
              label="Confirm Password"
              type="password"
              required={true}
              placeholder="Re-enter your password"
              error={errors.confirmPassword?.message}
            />
          </div>
          <div className="text-sm text-gray-500 my-12">
            By clicking Sign Up or Continue with Google, Facebook, You agree to Shizuka&apos;s{" "}
            <span className="text-theme-linkColor cursor-pointer">Terms of User</span> and{" "}
            <span className="text-theme-linkColor cursor-pointer">Privacy Policy</span> and to receiving emails from Shizuka.
          </div>
          <div className="flex justify-end mt-14">
            <CustomButton 
              type="submit"
              text="Next"
              isLoading={isSubmitting}
            />
          </div>
        </form>
      </div>
      {open && <TermsAndConditions open={open} toggle={toggle} onAgreed={()=>setActiveTab("emailVerification")} />}
    </div>
  );
};

export default Register;