
"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // Replace with your GA ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX"); // Replace with your GA ID
  }, []);

  return null;
}