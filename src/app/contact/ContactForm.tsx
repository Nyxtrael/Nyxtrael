'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const successMessageRef = useRef<HTMLParagraphElement>(null);

  // Focus the success message for screen readers when submission succeeds
  useEffect(() => {
    if (submitStatus === 'success' && successMessageRef.current) {
      successMessageRef.current.focus();
    }
  }, [submitStatus]);

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-serif font-semibold text-[#e2e8f0] mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="block w-full bg-[#1f2937] backdrop-blur-md text-[#e2e8f0] placeholder-[#94a3b8] font-inter border border-[#3b82f6]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-300"
          placeholder="Your name"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-serif font-semibold text-[#e2e8f0] mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
          className="block w-full bg-[#1f2937] backdrop-blur-md text-[#e2e8f0] placeholder-[#94a3b8] font-inter border border-[#3b82f6]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-300"
          placeholder="your.email@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-serif font-semibold text-[#e2e8f0] mb-1">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          className="block w-full bg-[#1f2937] backdrop-blur-md text-[#e2e8f0] placeholder-[#94a3b8] font-inter border border-[#3b82f6]/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all duration-300 resize-none"
          rows={4}
          placeholder="Tell me about your project..."
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#3b82f6] text-[#0f172a] py-4 px-8 rounded-lg text-xl font-semibold font-inter shadow-[#3b82f6]/50 hover:bg-[#60a5fa] hover:shadow-[#3b82f6]/70 transition-all duration-300 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#60a5fa] focus:ring-offset-2 focus:ring-offset-[#111827] disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={submitStatus === 'loading' ? 'Submitting form...' : 'Get in touch'}
      >
        {submitStatus === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-[#0f172a]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          <>
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <div aria-live="polite" className="text-center font-inter">
        {submitStatus === 'success' && (
          <p
            ref={successMessageRef}
            className="mt-4 text-[#10b981] font-inter"
            tabIndex={-1}
          >
            Message sent successfully! I’ll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-[#ef4444] font-inter">
            Failed to send message. Please try again or email me directly at nyxtrael@gmail.com.
          </p>
        )}
      </div>
    </form>
  );
}