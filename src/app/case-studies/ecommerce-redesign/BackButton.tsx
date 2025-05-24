import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <div className="fixed top-20 left-4 z-50 animate-slide-right">
      <Link
        href="/case-studies"
        className="flex items-center bg-shoptrend-bg/90 backdrop-blur-sm text-shoptrend-text px-4 py-2 rounded-lg shadow-md hover:bg-shoptrend-gold hover:text-shoptrend-bg transition-all duration-300"
        aria-label="Back to case studies"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back to Case Studies
      </Link>
    </div>
  );
}