import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../../lib/axios';

// --- API Helper Functions ---
const fetchProjects = async () => {
  // Axios automatically returns the parsed JSON inside the `data` property
  const response = await api.get('/projects'); 
  return response.data; 
};

const createProject = async (newProject) => {
  // Axios automatically stringifies the payload
  const response = await api.post('/projects', newProject);
  return response.data;
};

// --- Custom Hooks ---

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      // Refresh the projects list after a successful creation
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}