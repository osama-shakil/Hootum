import React, { forwardRef } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CustomInput = forwardRef(({
  type,
  required,
  placeholder,
  name,
  label,
  className,
  error,
  ...props
}, ref) => {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        required={required}
        placeholder={placeholder}
        name={name}
        ref={ref}
        className={`bg-theme-gray h-14 ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

CustomInput.displayName = 'CustomInput';

export default CustomInput;