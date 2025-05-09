'use client';

import { Suspense } from "react";
import PayContent from "./PayContent";

export default function PayPage() {
  return (
    <Suspense fallback={<div className="text-center text-white p-12">Loading payment info...</div>}>
      <PayContent />
    </Suspense>
  );
}
