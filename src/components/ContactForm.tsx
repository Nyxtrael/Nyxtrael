'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-sectionGray p-6 rounded-lg shadow-card">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white font-montserrat">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-neutral-dark text-white placeholder-gray-400 focus:ring-shoptrend-gold focus:border-shoptrend-gold"
          placeholder="Your name"
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white font-montserrat">
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
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-neutral-dark text-white placeholder-gray-400 focus:ring-shoptrend-gold focus:border-shoptrend-gold"
          placeholder="your.email@example.com"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white font-montserrat">
          Message
        </label>
        <textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-neutral-dark text-white placeholder-gray-400 focus:ring-shoptrend-gold focus:border-shoptrend-gold"
          rows={4}
          placeholder="Tell me about your project..."
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={submitStatus === 'loading'}
        className="w-full bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-bg py-2 px-4 rounded-md hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat uppercase tracking-wide"
        aria-label={submitStatus === 'loading' ? 'Submitting form...' : 'Send message'}
      >
        {submitStatus === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-shoptrend-bg"
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
          'Send Message'
        )}
      </button>

      <div aria-live="polite" className="text-center">
        {submitStatus === 'success' && (
          <p
            ref={successMessageRef}
            className="mt-4 text-green-400 font-inter"
            tabIndex={-1}
          >
            Message sent successfully! I’ll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="mt-4 text-red-400 font-inter">
            Failed to send message. Please try again or email me directly at hello@nyxtrael.com.
          </p>
        )}
      </div>
    </form>
  );
}