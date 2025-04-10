"use client";
import React from "react";

export function Spotlight({ className = "", fill = "white" }) {
  return (
    <div
      className={`absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-white/10 to-transparent blur-3xl pointer-events-none ${className}`}
      style={{ background: `radial-gradient(circle, ${fill}33, transparent)` }}
    />
  );
}
