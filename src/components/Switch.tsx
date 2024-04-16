import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import React from "react";

const switchVariants = cva("div", {
  variants: {
    state: {
      on: "bg-green-500",
      off: "bg-gray-300",
    },
    size: {
      small: "w-8 h-4",
      large: "w-12 h-6",
    },
  },
  defaultVariants: {
    state: "off",
    size: "small",
  },
});

export interface SwitchProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, state, size, ...props }: SwitchProps) {
  return (
    <div
      className={cn(switchVariants({ state, size }), className)}
      {...props}
    />
  );
}

export default Switch;
