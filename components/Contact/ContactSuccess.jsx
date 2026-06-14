import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ContactSuccess({ onReset }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center text-center w-full"
    >
      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
      <p className="text-gray-600 mb-8 max-w-sm">
        Thank you for reaching out. Your inquiry has been received and our team will get back to you shortly.
      </p>
      <button
        onClick={onReset}
        className="px-6 py-2 border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
      >
        Send another message
      </button>
    </motion.div>
  );
}