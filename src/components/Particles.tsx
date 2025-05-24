export default function Particles() {
  return (
    <svg className="absolute w-full h-full opacity-30" aria-hidden="true">
      <rect
        x="10%"
        y="20%"
        width="100"
        height="100"
        fill="none"
        stroke="currentColor"
        className="text-neon-pink/20"
        strokeWidth="2"
      />
      <circle
        cx="80%"
        cy="70%"
        r="50"
        fill="none"
        stroke="currentColor"
        className="text-neon-blue/20"
        strokeWidth="2"
      />
    </svg>
  );
}