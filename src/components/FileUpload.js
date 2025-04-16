'use client';

import React, { useState } from 'react';

export default function FileUpload({ onChange, files = [], onRemove }) {
  return (
    <div className="mt-4">
      <label className="block mb-1 text-sm font-medium text-neutral-300">
        📎 Add image/pdf/text references (optional)
      </label>
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.pdf,.txt,.doc,.docx"
        multiple
        onChange={onChange}
        className="w-full text-sm text-white bg-[#2d223e] rounded border border-[#3b2f4c] file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-700 file:text-white hover:file:bg-purple-600"
      />
      {files.length > 0 && (
        <ul className="mt-2 text-sm text-green-400 italic space-y-1">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{file.name}</span>
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="ml-4 text-red-400 hover:text-red-300 underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
