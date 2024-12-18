"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

const CustomCheckbox = ({ id, checked, onChange, label, className = "" }) => {
  return (
    <div className="flex items-center space-x-3">
      <div
        className={`
          w-6 h-6 rounded-full border-2 border-gray-300
          transition-colors duration-200
          ${checked ? 'bg-black border-black' : 'bg-white'}
           cursor-pointer
          flex items-center justify-center
          ${className}
        `}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <Check className="h-3 w-3 text-white" />
        )}
      </div>
      {label && (
        <label
          htmlFor={id}
          className="text-md  leading-none
            cursor-pointer select-none
            peer-disabled:cursor-not-allowed
            peer-disabled:opacity-70"
          onClick={() => onChange(!checked)}
        >
          {label}
        </label>
      )}
    </div>
  );
};

const MarketplaceModal = ({ open, toggle, onAgreed }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleCancel = () => {
    toggle(false);
  };

  const handleProceed = () => {
    onAgreed(dontShowAgain);
    toggle(false);
  };

  return (
    <Dialog open={open} onOpenChange={toggle}>
      <DialogContent className="sm:max-w-xl rounded-full p-8">
        <DialogHeader className="space-y-4 mt-8">
          <DialogTitle className="text-3xl font-semibold">
            Do you want to visit marketplace?
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground max-w-xs">
            Discover the Shizuka Marketplace for Art and Collectibles!
          </DialogDescription>
        </DialogHeader>

        <div className="pt-6">
          <CustomCheckbox
            id="dont-show"
            checked={dontShowAgain}
            onChange={setDontShowAgain}
            label="Don't show this again"
          />
        </div>

        <div className="flex justify-around mt-3">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="rounded-3xl px-6 py-2 w-52"
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            className="bg-black text-white w-52 hover:bg-black/90 rounded-3xl px-6 py-2"
          >
            Proceed
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarketplaceModal;