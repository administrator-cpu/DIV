'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/axios';  // ← Fixed: default import with @ alias

// --- API Helper Functions ---
const fetchProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

const createProject = async (newProject) => {
  const response = await api.post('/projects', newProject);
  return response.data;
};

// --- Custom Hooks ---

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
    onError: (error) => {
      console.error('Failed to create project:', error.message);
    },
  });
}