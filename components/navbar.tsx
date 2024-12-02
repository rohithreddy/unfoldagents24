"use client";

import { Button } from "./ui/button";
import { GitIcon, VercelIcon } from "./icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-2 flex gap-2 items-center justify-around mt-4">
      
      <aside>
      <h2 className="text-3xl text-center flex-grow">
        Unfold Agents 
      </h2>
      </aside>
      <aside>
      <Link href="https://github.com/vercel-labs/ai-sdk-preview-python-streaming">
        <Button variant="outline">
          <GitIcon /> View Source Code
        </Button>
      </Link>
      </aside>
    </div>
  );
};
