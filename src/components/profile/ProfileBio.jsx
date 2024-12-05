import React from "react";
import { Button } from "../ui/button";
import { Globe, Instagram, Twitter } from "lucide-react";

const ProfileBio = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center h-full justify-between px-8 pt-12 pb-4">
        <div>
          <h2 className="text-3xl font-semibold mb-2">An Artist</h2>
          <p className="text-muted-foreground">
            Passionate artist specializing in sketching, painting, abstract art
            etc. With over 10 years of experience. I aim to merge technology and
            creativity. My works explore themes of e.g. nature, technology,
            human emotions and are inspired by e.g. famous artists, cultural
            movements, personal experiences.
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 ">
          <div className="text-sm text-muted-foreground">
            Member since Mar 25, 2023
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 h-14 border-t border-black">
        <button className="flex items-center justify-center">
          {" "}
          <Instagram className="h-5 w-5" />
        </button>
        <button className="flex items-center justify-center border-l border-gray-400">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="flex items-center justify-center border-l border-gray-400">
          <Globe className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProfileBio;
