'use client';
import type { FormDataShape } from './types';

export default function FormSummary({ data }:{ data: FormDataShape }) {
  return (
    <div className="space-y-3 p-4 rounded-lg ring-1 ring-white/10 bg-neutral-mid">
      <h4 className="text-lg font-semibold text-text-base">Review</h4>
      <div className="grid md:grid-cols-2 gap-3 text-sm">
        <div><span className="text-text-muted">Name:</span> <strong className="text-text-base">{data.name}</strong></div>
        <div><span className="text-text-muted">Email:</span> <strong className="text-text-base">{data.email}</strong></div>
        <div><span className="text-text-muted">Phone:</span> <strong className="text-text-base">{data.phone || '—'}</strong></div>
        <div><span className="text-text-muted">Project:</span> <strong className="text-text-base">{data.projectType}</strong></div>
        <div><span className="text-text-muted">Budget:</span> <strong className="text-text-base">€{data.budget}</strong></div>
        <div><span className="text-text-muted">Deadline:</span> <strong className="text-text-base">{data.deadline}</strong></div>
      </div>
      <div className="text-sm"><span className="text-text-muted">Notes:</span> <div className="text-text-base whitespace-pre-wrap">{data.notes || '—'}</div></div>
      <div className="text-sm"><span className="text-text-muted">Files:</span> <strong className="text-text-base">{data.files.length} file(s)</strong></div>
    </div>
  );
}
