// Datos de los proyectos del portafolio
export interface Project {
  id: string;
  title: string;
  route: string;
  description?: string;
  image?: string;
}

export const projects: Project[] = [
  { id: '1', title: 'Dibujo Artístico', route: '/art-drawing' },
  { id: '2', title: 'Diseño Gráfico', route: '/graphic-design' },
  { id: '3', title: 'Volumen', route: '/volume' },
  { id: '4', title: 'Técnicas de Pintura', route: '/project/4' },
  { id: '5', title: 'Tipografía', route: '/typography' },
  { id: '6', title: 'Fotografía', route: '/photography' },
  { id: '7', title: 'Ilustración', route: '/illustration' },
  { id: '8', title: 'Audiovisuales', route: '/audiovisuales' }
];

// Función para obtener proyecto por ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

