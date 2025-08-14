'use client';
import { useEffect, useMemo, useState } from 'react';
import Stepper from './Stepper';
import FileDrop, { type FileItem } from './FileDrop';
import FormSummary from './FormSummary';
import type { FormDataShape } from './types';

const STEPS = ['Contact', 'Project', 'Assets', 'Review'] as const;
const STORAGE_KEY = 'advanced_form_draft_v1';

const initial: FormDataShape = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Website',
  budget: 1000,
  deadline: '',
  notes: '',
  files: [],
  agree: false,
};

export default function MultiForm() {
  const [data, setData] = useState<FormDataShape>(initial);
  const [step, setStep] = useState(0);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load draft
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setData({ ...initial, ...parsed, files: [] }); // files can't be restored from LS
      }
    } catch {}
  }, []);

  // Auto save
  useEffect(() => {
    const toSave = { ...data, files: [] };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [data]);

  const canNext = useMemo(() => {
    switch (step) {
      case 0:
        return data.name.trim().length > 1 && /.+@.+\..+/.test(data.email);
      case 1:
        return data.budget > 0 && data.deadline.trim().length > 2 && (data.projectType !== 'Other' || (data.otherProject?.trim().length ?? 0) > 1);
      case 2:
        return true;
      case 3:
        return data.agree;
      default:
        return false;
    }
  }, [step, data]);

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));
  const reset = () => { setData(initial); setStep(0); localStorage.removeItem(STORAGE_KEY); };

  async function submit() {
    setSending(true); setError(null);
    try {
      // Minimal mock — send JSON only (without binary files)
      const res = await fetch('/api/advanced-forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, files: data.files.map(f => ({ name: f.file.name, size: f.file.size, type: f.file.type })) }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      window.location.href = '/example-work/forms/success';
    } catch (e:any) {
      setError(e.message || 'Submission failed');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 p-4 sm:p-6">
      <Stepper steps={[...STEPS]} current={step} />

      {/* Step content */}
      {step === 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-text-muted">Full name *</label>
            <input value={data.name} onChange={e=>setData({...data, name: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" placeholder="Ada Lovelace" />
          </div>
          <div>
            <label className="block text-sm text-text-muted">Email *</label>
            <input type="email" value={data.email} onChange={e=>setData({...data, email: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent" placeholder="you@company.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-text-muted">Phone</label>
            <input value={data.phone || ''} onChange={e=>setData({...data, phone: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" placeholder="+48 ..." />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-text-muted">Project type *</label>
            <select value={data.projectType} onChange={e=>setData({...data, projectType: e.target.value as any})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10">
              <option>Website</option>
              <option>SaaS</option>
              <option>E-commerce</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-text-muted">Budget (EUR) *</label>
            <input type="number" min={1} value={data.budget} onChange={e=>setData({...data, budget: Number(e.target.value)})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
          </div>
          {data.projectType === 'Other' && (
            <div className="sm:col-span-2">
              <label className="block text-sm text-text-muted">Describe your project *</label>
              <input value={data.otherProject || ''} onChange={e=>setData({...data, otherProject: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" placeholder="What are you building?" />
            </div>
          )}
          <div className="sm:col-span-2">
            <label className="block text-sm text-text-muted">Deadline *</label>
            <input type="date" value={data.deadline} onChange={e=>setData({...data, deadline: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-text-muted">Notes</label>
            <textarea rows={4} value={data.notes || ''} onChange={e=>setData({...data, notes: e.target.value})} className="w-full px-3 py-2 rounded-md bg-neutral-bg text-text-base ring-1 ring-white/10" placeholder="Short brief..." />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <FileDrop value={data.files as FileItem[]} onChange={(v)=>setData({...data, files: v})} />
          <p className="text-xs text-text-muted">Files are kept locally for preview in this demo.</p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <FormSummary data={data} />
          <label className="inline-flex items-center gap-2 text-sm">
            <input type="checkbox" checked={data.agree} onChange={e=>setData({...data, agree: e.target.checked})} className="accent-accent" />
            I agree to the processing of my data for the purpose of this inquiry.
          </label>
          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
      )}

      {/* Nav */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={back} disabled={step===0} className="px-4 py-2 rounded-md ring-1 ring-white/10 disabled:opacity-50">Back</button>
          <button onClick={reset} className="px-4 py-2 rounded-md text-text-muted hover:text-text-base">Reset</button>
        </div>
        {step < STEPS.length - 1 ? (
          <button onClick={next} disabled={!canNext} className="px-5 py-2 bg-gradient-cta text-neutral-900 font-semibold rounded-md disabled:opacity-50">
            Next
          </button>
        ) : (
          <button onClick={submit} disabled={!canNext || sending} className="px-6 py-2 bg-gradient-cta text-neutral-900 font-semibold rounded-md disabled:opacity-50">
            {sending ? 'Submitting…' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  );
}
