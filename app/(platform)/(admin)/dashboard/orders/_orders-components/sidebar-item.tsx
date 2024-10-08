"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

export const SidebarItem = ({
  href,
  icon: Icon,
  label,
  active,
}: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8
            md:w-8 ${
            href === pathname
                ? "bg-accent text-accent-foreground hover:text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
        >
          <Icon className="h-5 w-5 text-primary" />
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};
