import { AuthFormData, authSchema } from '@/schemas/auth.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useAuthForm() {
  return useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
}
