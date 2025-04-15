'use client';

import React from 'react';

export default function FileUpload({ onChange, file }) {
  return (
    <div className="mt-4">
      <label className="block mb-1 text-sm font-medium text-neutral-300">
        📎 Add image/pdf/text reference (optional)
      </label>
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.txt,.doc,.docx"
        onChange={onChange}
        className="w-full text-sm text-white bg-[#2d223e] rounded border border-[#3b2f4c] file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-700 file:text-white hover:file:bg-purple-600"
      />
      {file && (
        <p className="mt-1 text-green-400 text-sm italic">
          Uploaded: {file.name}
        </p>
      )}
    </div>
  );
}
