'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  message: string;
  plan?: string;
  honeypot?: string;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || '';
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>({
    defaultValues: {
      plan,
      honeypot: '',
    },
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle'); // Explicitly defined type
  const successMessageRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (plan) {
      setValue('plan', plan);
    }
  }, [plan, setValue]);

  useEffect(() => {
    if (submitStatus === 'success' && successMessageRef.current) {
      successMessageRef.current.focus();
    }
  }, [submitStatus]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.honeypot) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          plan: data.plan,
        }),
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

  // Debug log to verify submitStatus type (remove in production)
  console.log('submitStatus:', submitStatus, 'Type:', typeof submitStatus);

  // Type guard to ensure TypeScript recognizes all states
  const isSuccess = (status: string): status is 'success' => status === 'success';

  return (
    <div>
      <h3 className="text-2xl font-semibold text-text-base mb-6">Send Me a Message</h3>
      {isSuccess(submitStatus) && ( // Using type guard
        <p
          ref={successMessageRef}
          className="text-accent text-center text-lg"
          tabIndex={-1}
        >
          Thank you for your message! I’ll get back to you within 24 hours.
        </p>
      ) || (submitStatus === 'error' || submitStatus === 'loading' || submitStatus === 'idle') && (
        <form className="space-y-6 font-inter" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            type="text"
            {...register('honeypot')}
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="md:flex md:gap-4">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <label htmlFor="name" className="block text-sm font-semibold text-text-base mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="Your name"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="md:w-1/2">
              <label htmlFor="email" className="block text-sm font-semibold text-text-base mb-1">
                Your Email
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
                className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                placeholder="your.email@example.com"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-text-base mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 20, message: 'Message should be at least 20 characters' },
                maxLength: { value: 1000, message: 'Message is too long (max 1000 characters)' },
              })}
              className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
              rows={6}
              placeholder="Describe your project (e.g., industry, goals, features, timeline)"
              aria-invalid={errors.message ? 'true' : 'false'}
            />
            <p className="mt-1 text-sm text-text-muted-secondary">
              Tip: Include your industry, goals, desired features, and timeline for a faster quote.
            </p>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>
          <p className="text-sm text-text-muted-secondary">
            By submitting, you consent to processing your data for responding to your inquiry. See my{' '}
            <Link href="/privacy" className="underline hover:text-accent">
              Privacy Policy
            </Link>.
          </p>
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-neutral-dark py-4 px-8 rounded-lg text-xl font-semibold shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-bg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={submitStatus === 'loading' ? 'Submitting form...' : 'Send message'}
          >
            {submitStatus === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-neutral-dark"
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
                Send Message
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
          <div aria-live="polite" className="text-center">
            {isSuccess(submitStatus) && ( // Using type guard
              <p
                ref={successMessageRef}
                className="mt-4 text-accent"
                tabIndex={-1}
              >
                Thank you for your message! I’ll get back to you within 24 hours.
              </p>
            )}
            {(submitStatus === 'error' || submitStatus === 'loading' || submitStatus === 'idle') && (
              <></> // Empty fragment for non-success states, error message removed for simplicity
            )}
          </div>
        </form>
      )}
    </div>
  );
}