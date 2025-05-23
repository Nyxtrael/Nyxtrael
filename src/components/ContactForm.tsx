"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-neutral-mid p-6 md:p-10 rounded-xl shadow-xl w-full border border-accent/40 backdrop-blur-sm">
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-accent text-neutral-dark text-center py-3 rounded-t-lg mb-4 flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" aria-hidden="true" />
          <span>Thank you! I’ll reply within 24 hours.</span>
        </motion.div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            aria-label="Your Name"
            className="w-full min-h-[48px] px-4 py-2 bg-neutral-dark text-text-base rounded-lg border border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none font-inter transition-all duration-300 hover:bg-sectionGray text-base"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Your Email"
            aria-label="Your Email"
            className="w-full min-h-[48px] px-4 py-2 bg-neutral-dark text-text-base rounded-lg border border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none font-inter transition-all duration-300 hover:bg-sectionGray text-base"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <textarea
            {...register("message")}
            placeholder="Your Message"
            aria-label="Your Message"
            className="w-full h-32 px-4 py-2 bg-neutral-dark text-text-base rounded-lg border border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent focus:outline-none resize-none font-inter transition-all duration-300 hover:bg-sectionGray text-base"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <div className="flex justify-center">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="bg-accent text-neutral-dark px-6 py-3 rounded-lg hover:bg-dark-accent transition-all duration-300 font-inter relative group"
            aria-label={loading ? "Sending message" : "Send message"}
          >
            <span className="relative">
              {loading ? "Sending..." : "Send Message"}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-text-muted bg-neutral-mid px-2 py-1 rounded">
                You’ll get a reply in 24h
              </span>
            </span>
          </motion.button>
        </div>
      </form>
    </div>
  );
}