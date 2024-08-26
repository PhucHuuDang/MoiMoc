"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const ProductControllerHeader = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="moiMoc" size="icon" className="h-7 w-7">
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Back</span>
      </Button>
      <h1
        className="flex-1 dark:text-primary shrink-0 whitespace-nowrap text-xl font-semibold
          tracking-tight sm:grow-0"
      >
        Pro Controller
      </h1>
      <Badge
        variant="outline"
        className="ml-auto sm:ml-0 text-primary border border-primary"
      >
        In stock
      </Badge>
      <div className="hidden items-center gap-2 md:ml-auto md:flex dark:text-primary">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm" variant="moiMoc">
          Save Product
        </Button>
      </div>
    </div>
  );
};