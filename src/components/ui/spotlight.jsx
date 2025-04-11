"use client";
import React from "react";

export function Spotlight({ className = "", fill = "white" }) {
  const gradient = `${fill}33`; // 20% opacity HEX fallback

  return (
    <div
      className={`absolute w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl ${className}`}
      style={{
        background: `radial-gradient(circle, ${gradient}, transparent)`
      }}
    />
  );
}
