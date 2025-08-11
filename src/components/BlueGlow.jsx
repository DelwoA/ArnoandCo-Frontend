import React from "react";
import { cn } from "@/lib/utils";

function BlueGlow({
  children,
  className = "",
  scale = true,
  rounded = "rounded-2xl",
}) {
  return (
    <div
      className={cn(
        "group relative overflow-visible ring-1 ring-transparent transition-all duration-200",
        rounded,
        scale && "hover:scale-105",
        "hover:ring-[#c0e0f6b3] hover:shadow-[0_0_0_2px_#c0e0f68c,0_0_18px_6px_#c0e0f659,0_0_48px_16px_#c0e0f640]",
        "focus-within:ring-[#c0e0f6b3] focus-within:shadow-[0_0_0_2px_#c0e0f68c,0_0_18px_6px_#c0e0f659,0_0_48px_16px_#c0e0f640]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default BlueGlow;
