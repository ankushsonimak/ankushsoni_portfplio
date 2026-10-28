export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Full name is required';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (trimmedName.length > 80) {
    errors.name = 'Name must be less than 80 characters';
  }

  const trimmedEmail = (data.email || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email format';
  }

  const trimmedSubject = (data.subject || '').trim();
  if (!trimmedSubject) {
    errors.subject = 'Subject is required';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
  }

  const trimmedMessage = (data.message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Message payload cannot be empty';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (trimmedMessage.length > 2500) {
    errors.message = 'Message must be less than 2,500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateDispatchHash(data: ContactFormData): string {
  const payload = `${data.email}:${data.subject}:${Date.now()}`;
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    hash = (hash << 5) - hash + payload.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0x${hex.toUpperCase()}`;
}
