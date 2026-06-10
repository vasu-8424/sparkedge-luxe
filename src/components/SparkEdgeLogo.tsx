import React from "react";
import logoImg from "@/assets/logo.png";

interface SparkEdgeLogoProps {
  showSubtitle?: boolean;
  className?: string;
  lightText?: boolean;
}

export function SparkEdgeLogo({ 
  showSubtitle = true, 
  className = "h-10 w-auto", 
  lightText = false 
}: SparkEdgeLogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="SparkEdge Logo" 
      className={className} 
      style={{ objectFit: "contain" }}
    />
  );
}
