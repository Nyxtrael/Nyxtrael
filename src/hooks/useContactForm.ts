// src/hooks/useContactForm.ts

'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  service: z.string().optional(),
  message: z.string().min(1, 'Message cannot be empty.')
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitted,
    setSubmitted
  };
}
