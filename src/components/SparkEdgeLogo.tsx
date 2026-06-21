import React from "react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

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
  const logoSrc = lightText ? logoLight : logoDark;
  
  return (
    <img 
      src={logoSrc} 
      alt="SparkEdge Logo" 
      className={className} 
      style={{ objectFit: "contain" }}
    />
  );
}


