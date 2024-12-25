
"use client";

import { useState } from "react";
import CustomButton from "../common/CustomButton";
import OTPComp from "../common/OTPComp";
import { Button } from "../ui/button";

const EmailVerification = ({ setActiveTab }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));

  return (
    <div className="flex flex-col min-h-[calc(100%-4rem)]">
      <div className="flex-1 p-2 sm:p-2 my-4 sm:my-4">
        <h2 className="text-md sm:text-2xl font-bold">Email Verification</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          Enter OTP which you received in your email{" "}
          <span className="text-foreground break-all">firvik@nocdum.in</span>
        </p>
        
        <div className="space-y-4 mt-6">
          <OTPComp otp={otp} setOtp={setOtp} />
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-4 space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="xsm"
                className="hover:bg-transparent rounded-full py-2 px-4 h-full w-full sm:w-auto"
              >
                Cancel
              </Button>
              <CustomButton 
                text="Verify OTP" 
                className="w-full sm:w-auto"
                handleClick={() => setActiveTab("registrationDone")}
              />
            </div>
            
            <div className="flex items-center justify-center sm:justify-start pt-4 md:pt-0 w-full md:w-auto">
              <p className="text-gray-400 text-sm">Incorrect?</p>
              <Button
                variant="link"
                size="xsm"
                className="text-sm sm:text-md pl-1 hover:bg-transparent"
              >
                Resend OTP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;