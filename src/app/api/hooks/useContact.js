import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { api } from '../../../../lib/axios';

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await api.post('/contacts', formData);
      return response.data;
    },
  });
}