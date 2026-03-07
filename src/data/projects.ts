// src/data/projects.ts

// 1. Definimos las categorías que tendrás en el menú
export const categories = [
  { id: 'dibujo', title: 'Dibujo Artístico' },
  { id: 'diseno', title: 'Diseño Gráfico' },
  { id: 'volumen', title: 'Volumen' },
  { id: 'pintura', title: 'Técnicas de Pintura' },
  { id: 'tipo', title: 'Tipografía' }
];

// 2. Definimos tus proyectos, asignando cada uno a una categoría (id)
export const projects = [
  { 
    id: 1, 
    title: 'Retrato a Carboncillo', 
    category: 'dibujo', 
    description: 'Estudio de luces y sombras en rostro humano.' 
  },
  { 
    id: 2, 
    title: 'Identidad Visual Mooral', 
    category: 'diseno', 
    description: 'Diseño de marca para portfolio moderno.' 
  },
  { 
    id: 3, 
    title: 'Escultura en Arcilla', 
    category: 'volumen', 
    description: 'Figura abstracta trabajando formas orgánicas.' 
  },
  { 
    id: 4, 
    title: 'Acuarelas Urbanas', 
    category: 'pintura', 
    description: 'Serie de paisajes urbanos rápidos.' 
  },
  { 
    id: 5, 
    title: 'Tipografía Experimental', 
    category: 'tipo', 
    description: 'Diseño de alfabeto basado en estructuras arquitectónicas.' 
  }
];