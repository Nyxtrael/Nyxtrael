"use client";

import dynamic from "next/dynamic";

export const FeaturedProduct = dynamic(() => import("./FeaturedProduct"), {
  loading: () => <div className="section text-center text-shoptrend-text font-lora">Loading Featured Product...</div>,
  ssr: false,
});

export const CustomerStories = dynamic(() => import("./CustomerStories"), {
  loading: () => <div className="section text-center text-shoptrend-text font-lora">Loading Customer Stories...</div>,
  ssr: false,
});