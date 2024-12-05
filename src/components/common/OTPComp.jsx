"use client";
import React, { useRef } from 'react'
import { Input } from '../ui/input'

const OTPComp = ({otp,setOtp}) => {
    const inputRefs = useRef    ([])
  
    const handleChange = (index, value) => {
      if (isNaN(Number(value))) return
  
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
  
      // Move to next input if value is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  
    const handleKeyDown = (index,e) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        // Move to previous input on backspace if current input is empty
        inputRefs.current[index - 1]?.focus()
      }
    }
  
    const handlePaste = (e) => {
      e.preventDefault()
      const pastedData = e.clipboardData.getData("text").slice(0, 6)
      const newOtp = [...otp]
      
      pastedData.split("").forEach((char, index) => {
        if (!isNaN(Number(char)) && index < 6) {
          newOtp[index] = char
        }
      })
      
      setOtp(newOtp)
    }
  return (
    <div className="flex gap-2 justify-between  w-[50%] md:w-[70%] my-10">
    {otp.map((digit, index) => (
      <Input
        key={index}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={digit}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        onPaste={handlePaste}
        ref={(el) => (inputRefs.current[index] = el)}
        className="w-14 h-16 text-center text-lg bg-gray-50 border-2 border-gray-200 "
      />
    ))}
  </div>   
  )
}

export default OTPComp
