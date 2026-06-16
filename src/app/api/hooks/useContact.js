'use client';

import { useState } from 'react';
import api from '../../../../lib/axios';

export function useSubmitContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitContact = async (formData) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const response = await api.post('/contacts', formData);
      setIsSuccess(true);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Failed to submit contact form.';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    submitContact,
    isLoading,
    error,
    isSuccess,
    resetForm,
  };
}