'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsAgreement({ checked, onChange }) {
  return (
    <div className="mt-6">
      <label className="flex items-start gap-3 bg-[#1a1320] p-4 rounded-xl cursor-pointer border border-[#2d223e] hover:border-purple-400 transition-all">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="accent-purple-500 h-5 w-5 mt-1"
        />
        <span className="text-sm text-neutral-300">
          By clicking <span className="italic">‘Summon’</span>, you accept the{' '}
          <Link href="/terms" className="underline text-purple-300 hover:text-purple-200">Terms</Link>{' '}and{' '}
          <Link href="/refund" className="underline text-purple-300 hover:text-purple-200">Refund Policy</Link>.
        </span>
      </label>
    </div>
  );
}
