import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, AlertCircle, Loader2 } from 'lucide-react';
import { contactSchema } from '../../lib/validations';

export default function ContactForm({ onSubmit, isPending, isError, error }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  return (
    <motion.form
      key="form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
      
      {/* Global Error Display */}
      {isError && (
        <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error?.response?.data?.message || error?.message || "Failed to send message."}</p>
        </div>
      )}

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input
            {...register('name')}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pink-500'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input
            {...register('email')}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pink-500'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject (Optional)</label>
        <input
          {...register('subject')}
          placeholder="How can we help?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
        <textarea
          {...register('message')}
          rows="4"
          placeholder="Tell us about your project..."
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-pink-500'}`}
        />
        <div className="flex justify-end mt-2">
          {errors.message && <p className="text-red-500 text-xs mr-auto">{errors.message.message}</p>}
          <p className="text-xs text-gray-400">Max 2000 characters</p>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isPending ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <><Send className="w-5 h-5" /> Send Message</>
        )}
      </button>
    </motion.form>
  );
}