"use client";

export default function AnimatedBackground() {
  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-ecom-bg via-white/10 to-ecom-bg shimmer-effect" />
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#F472B6", stopOpacity: 0.3 }} />
            <stop offset="100%" className="fill-transparent" />
          </radialGradient>
        </defs>
        <circle cx="20%" cy="30%" r="2" fill="url(#petalGradient)" opacity="0.3">
          <animate attributeName="cy" from="30%" to="40%" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cx" from="20%" to="30%" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="80%" cy="60%" r="1.5" fill="url(#petalGradient)" opacity="0.3">
          <animate attributeName="cy" from="60%" to="70%" dur="12s" repeatCount="indefinite" />
          <animate attributeName="cx" from="80%" to="90%" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="20%" r="2.5" fill="url(#petalGradient)" opacity="0.3">
          <animate attributeName="cy" from="20%" to="30%" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cx" from="50%" to="60%" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}