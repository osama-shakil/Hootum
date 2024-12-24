"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";
import EmailVerification from "./EmailVerification";
import SuccessMessage from "./SuccessMessage";
import { useRouter } from "next/navigation";

export default function HandleRegistration() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("signin");
  useEffect(() => {
    if (activeTab === "registrationDone") {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  }, [activeTab]);
  return (
    <div className="">
      <main className="md:container  mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-12 md:gap-12  gap-4 items-start mx-auto  ">
          <div className="lg:col-span-7 col-span-12 relative rounded-3xl overflow-hidden">
            <div className="aspect-[3/2] relative min-h-[400px] md:min-h-[520px]">
              <Image
                src="/backgrounds-images/authImage.png"
                alt="auth img"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-theme-primary p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Discover and buy Amazing Art
              </h2>
              <ul className="space-y-1">
                <li>Take control over your career</li>
                <li>Secure your future with blockchain</li>
                <li>Personalized support</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 col-span-12 ">
            {activeTab === "signin" && (
              <div className="bg-white border border-gray-400 rounded-3xl shadow-sm h-fit">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <Login />
              </div>
            )}
            {activeTab === "register" && (
              <div className="bg-white border border-gray-400 rounded-3xl shadow-sm h-fit">
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <Register setActiveTab={setActiveTab} />
              </div>
            )}
            {activeTab === "emailVerification" && (
              <div className="bg-white border border-gray-400 rounded-3xl  shadow-sm h-fit">
                <EmailVerification setActiveTab={setActiveTab} />
              </div>
            )}
            {activeTab === "registrationDone" && (
              <div className="bg-white border border-gray-400 rounded-3xl shadow-sm h-fit px-6 mt-8 w-fit  mx-auto">
                <SuccessMessage setActiveTab={setActiveTab} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
