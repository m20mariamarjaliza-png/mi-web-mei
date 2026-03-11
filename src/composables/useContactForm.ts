// Composable para gestionar el formulario de contacto
import { ref, computed } from 'vue';

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const formData = ref<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const copied = ref<null | 'email' | 'phone'>(null);
  const isSubmitting = ref(false);
  const submitStatus = ref<'idle' | 'success' | 'error'>('idle');

  const isFormValid = computed(() => {
    return formData.value.name.trim() !== '' &&
           formData.value.email.trim() !== '' &&
           formData.value.message.trim() !== '';
  });

  const copyToClipboard = async (text: string, key: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = key;
      setTimeout(() => {
        if (copied.value === key) copied.value = null;
      }, 1200);
    } catch {
      // Si el portapapeles no funciona, no hacemos nada
    }
  };

  const submitForm = async () => {
    if (!isFormValid.value) return;

    isSubmitting.value = true;
    submitStatus.value = 'idle';

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000));

    isSubmitting.value = false;
    submitStatus.value = 'success';

    // Resetear formulario
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
  };

  const resetForm = () => {
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
    submitStatus.value = 'idle';
  };

  return {
    formData,
    copied,
    isSubmitting,
    submitStatus,
    isFormValid,
    copyToClipboard,
    submitForm,
    resetForm
  };
}

