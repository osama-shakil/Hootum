

"use client";

import { AvatarFallback } from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  ArrowRightCircle,
  Badge,
  BadgeCheck,
  Link as LinkIcon,
  MapPin,
  MoreHorizontal,
  Pencil,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import ProfileBio from "./ProfileBio";

const ProfileHeader = () => {
  const [open, setOpen] = useState(false);

  const UserMenu = memo(({ open, onOpenChange }) => (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full border">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-xl border-2 p-2 shadow-lg will-change-transform data-[side=bottom]:animate-slideUpAndFade relative"
          sideOffset={5}
          align="end"
        >
          <div className="h-4 w-4 rotate-45 absolute -top-2 border-l-2 border-t-2 bg-white right-8"></div>
          <DropdownMenu.Item className="outline-none">
            <Link
              href="/profile"
              className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg"
            >
              <Pencil className="w-5 h-5" />
              <span className="font-medium">Edit Profile</span>
            </Link>
          </DropdownMenu.Item>
          <hr />
          <DropdownMenu.Item className="outline-none">
            <div className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg">
              <ArrowRightCircle className="w-5 h-5" />
              <span className="font-medium">Transfer token</span>
            </div>
          </DropdownMenu.Item>
          <hr />
          <DropdownMenu.Item className="outline-none">
            <div className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-lg">
              <LinkIcon className="w-5 h-5" />
              <span className="font-medium">Copy Link</span>
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ));
  
  UserMenu.displayName = "UserMenu";
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="border-l border-b border-black">
        {/* Banner */}
        <div className="relative h-48 sm:h-64 md:h-80">
          <Image
            src="/backgrounds-images/profileBanner.png"
            alt="Profile banner"
            fill
            className="object-cover border-b border-black"
            priority
          />
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 rounded-full absolute left-1/2 transform -translate-x-1/2 -bottom-1/2 sm:-translate-y-1/2 md:left-48">
            <AvatarImage
              src="/backgrounds-images/profile.png"
              alt="Riaz Ahmed"
            />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="px-4 pb-6 mt-6 sm:mt-24 md:mt-12 md:ml-72">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">Riaz Ahmed</h1>
                <Image
                  src="/icons/verified.svg"
                  alt="verified"
                  width={34}
                  height={34}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
              </div>
              <UserMenu open={open} onOpenChange={setOpen} />
            </div>
            <p className="text-sm md:text-md font-mono break-all mb-2">0xc4c16a645...b21a</p>
            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              Dhaka, Bangladesh
            </div>

            <div className="flex gap-4 sm:gap-6 mt-4">
              <div>
                <div className="font-semibold">10</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Assets</div>
              </div>

              <div className="my-2 w-[2px] bg-gray-400" />

              <div>
                <div className="font-semibold">238</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Followers</div>
              </div>

              <div className="my-2 w-[2px] bg-gray-400" />

              <div>
                <div className="font-semibold">101</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-l border-b border-black">
        <ProfileBio />
      </div>
    </div>
  );
};

export default ProfileHeader;