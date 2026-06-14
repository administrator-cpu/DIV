'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSubmitContact } from '../../src/app/api/hooks/useContact';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';

export default function ContactSection() {
  // Pull the mutation state from our custom hook
  const { mutate, isPending, isError, error, isSuccess, reset } = useSubmitContact();

  const handleFormSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="relative w-full py-20 bg-gray-50 flex justify-center px-4">
      <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl shadow-black/5 overflow-hidden flex flex-col md:flex-row">
        
        {/* Render the Left Panel */}
        <ContactInfo />

        {/* Render the Right Panel (Logic Handles Swapping) */}
        <div className="w-full md:w-7/12 p-10 md:p-14 relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <ContactSuccess onReset={reset} />
            ) : (
              <ContactForm 
                onSubmit={handleFormSubmit}
                isPending={isPending}
                isError={isError}
                error={error}
              />
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}