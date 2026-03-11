// Composable para gestionar los proyectos
import { ref, computed } from 'vue';
import { projects, type Project } from '@/data/projects';

export function useProjects() {
  const currentProjectId = ref<string | null>(null);

  const allProjects = computed(() => projects);

  const getProjectById = (id: string): Project | undefined => {
    return projects.find(p => p.id === id);
  };

  const getProjectRoute = (project: Project): string => {
    return project.route;
  };

  const filterProjects = (searchTerm: string): Project[] => {
    if (!searchTerm.trim()) return projects;
    
    const term = searchTerm.toLowerCase();
    return projects.filter(p => 
      p.title.toLowerCase().includes(term)
    );
  };

  const setCurrentProject = (id: string | null) => {
    currentProjectId.value = id;
  };

  const currentProject = computed(() => {
    if (!currentProjectId.value) return null;
    return getProjectById(currentProjectId.value);
  });

  return {
    projects,
    currentProjectId,
    currentProject,
    allProjects,
    getProjectById,
    getProjectRoute,
    filterProjects,
    setCurrentProject
  };
}

