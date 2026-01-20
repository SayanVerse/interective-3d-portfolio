import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grid grid-cols-1 gap-4 border-t border-border px-4 py-6 sm:grid-cols-3 md:px-6 items-center">
      <p className="text-xs text-center sm:text-left text-gray-500 dark:text-gray-400">
        © {year} {config.author}. All rights reserved.
      </p>
      <div className="flex justify-center">
        <SocialMediaButtons />
      </div>
      <div className="hidden sm:block" /> {/* Spacer for 3rd column */}
    </footer>
  );
}

export default Footer;
