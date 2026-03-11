// Datos de contacto
export interface ContactInfo {
  type: 'email' | 'phone' | 'location' | 'instagram';
  value: string;
  label: string;
}

export const contactInfo: ContactInfo[] = [
  { type: 'email', value: 'm20mariamarjaliza@gmail.com', label: 'Correo' },
  { type: 'phone', value: '635482951', label: 'Teléfono' },
  { type: 'location', value: 'Valencia', label: 'Ubicación' }
];

export const socialLinks = [
  { type: 'instagram', url: 'https://instagram.com/mmaria0620', label: 'Instagram' }
];

